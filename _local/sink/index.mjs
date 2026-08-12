import { spawn } from "child_process";
import { writeFileSync } from "fs";
import { createServer } from "http";
import { tmpdir } from "os";
import { join } from "path";

function showPayload(text) {
  console.log(`
________________________________________

${text}
________________________________________
`);
  const filePath = join(tmpdir(), `sink-${Date.now()}.txt`);
  writeFileSync(filePath, `${text}\n`);

  const command =
    process.platform === "darwin"
      ? ["open", [filePath]]
      : process.platform === "win32"
        ? ["cmd", ["/c", "start", "", filePath]]
        : ["xdg-open", [filePath]];

  spawn(command[0], command[1], {
    detached: true,
    stdio: "ignore",
  }).unref();
}

createServer((req, res) => {
  const end = () => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end();
  }
  switch (req.method) {
    case "GET": {
      const payload = req.url.slice(1);
      showPayload(payload);
      end();
      break;
    }

    case "POST": {
      const body = [];
      req
        .on("data", (chunk) => {
          body.push(chunk);
        })
        .on("end", () => {
          const payload = Buffer.concat(body).toString();
          showPayload(payload);
          end();
        });
      break;
    }
    default:
      console.error(`Unsupported method: ${req.method}`);
      end()
      break;
  }
}).listen(1337);

console.log("listening on http://localhost:1337");
