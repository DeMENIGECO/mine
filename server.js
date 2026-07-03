const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.static("admin"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/admin/index.html");
});

app.listen(3000, () => {
    console.log("Mine avviato su http://localhost:3000");
});
