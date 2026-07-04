#!/usr/bin/env node

const { spawn } = require("child_process");
const path = require("path");

const command = process.argv[2];

switch (command) {
    case "start": {
        const serverPath = path.join(__dirname, "../server.js");

        spawn(process.execPath, [serverPath], {
            stdio: "inherit",
            cwd: process.cwd()
        });

        break;
    }

    default:
        console.log("Mine CLI v0.1.0");
        console.log("");
        console.log("Comandi disponibili:");
        console.log("  mine start");
        break;
}
