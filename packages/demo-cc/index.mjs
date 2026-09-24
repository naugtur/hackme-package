#!/usr/bin/env node

import { spawn } from "node:child_process";
import { writeFileSync } from "node:fs";
import { createServer } from "node:http";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { parseArgs } from "node:util";

const args = parseArgs({
  strict: true,
  options: {
    headless: { type: "boolean" },
    once: { type: "boolean" },
    help: { type: "boolean" },
  },
});

if (args.help) {
  console.log(`
Usage: demo-cc [--headless] [--once][--help]

Options:
  --headless    Do not show the payload in text editor window
  --once       Exit after receiving the first payload
  --help     Show this help message
  `);
  process.exit(0);
}

function showPayload(text) {
  console.log(`
________________________________________

${text}
________________________________________
`);
  if (!args.headless) {
    const filePath = join(tmpdir(), `demo-cc-${Date.now()}.txt`);
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
}

createServer((req, res) => {
  const end = () => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end();
  };
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
      end();
      break;
  }
  if (args.once) {
    process.exit(0);
  }
}).listen(1337);

console.log("listening on http://localhost:1337");
if (!args.headless) {
  console.log(
    "Anything sent to this server will be opened in your default text editor",
  );
} else {
  console.log(
    "Anything sent to this server will be displayed here in the terminal",
  );
}
