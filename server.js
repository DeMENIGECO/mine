const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

/**
 * BASE
 */

//
// Cartella del progetto UTENTE
// (da cui viene eseguito "node server.js" o "mine start")
//

const PROJECT_DIR = process.cwd();

/**
 * MIDDLEWARE
 */

app.use(express.json());

// Admin static files (UI di Mine)
app.use("/admin", express.static(path.join(__dirname, "admin")));

/**
 * HELPER JSON
 */

function readJson(file) {
    const filePath = path.join(PROJECT_DIR, file);
    if (!fs.existsSync(filePath)) return [];
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(file, data) {
    const filePath = path.join(PROJECT_DIR, file);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

/**
 * API READ
 */

app.get("/api/models", (req, res) => {
    res.json(readJson("models.json"));
});

app.get("/api/db", (req, res) => {
    res.json(readJson("db.json"));
});

app.get("/api/users", (req, res) => {
    res.json(readJson("users.json"));
});

/**
 * TEST ROUTE
 */

app.get("/", (req, res) => {
    res.redirect("/admin");
});

/**
 * AVVIO SERVER
 */

app.listen(3000, () => {
    console.log("MINE ADMIN v0.1.0")
    console.log("---------------------")
    console.log("")
    console.log("Usando URLPatterns:")
    console.log("  - MineDefaluts")
    console.log("  - urls.js")
    console.log("")
    console.log("DEBUG\n---------------------")
    console.log("")
    console.log("Mine avviato!");
    console.log("Project dir:", PROJECT_DIR);
    console.log("Admin: http://localhost:3000/admin");
});
