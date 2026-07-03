#!/usr/bin/env node

const { spawn } = require("child_process");
const path = require("path");

const command = process.argv[2];

if (command === "start") {
    const serverPath = path.join(__dirname, "../server.js");

    spawn("node", [serverPath], {
        stdio: "inherit"
    });
}
