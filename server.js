const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "figma_db",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// API Routes
app.post("/api/figma", (req, res) => {
  const { name, description, image, clipboard } = req.body;
  const sql = "INSERT INTO figma_files (name, description, image, clipboard) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, description, image, clipboard], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send("Data Inserted");
  });
});

app.get("/api/figma", (req, res) => {
  const sql = "SELECT * FROM figma_files";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
