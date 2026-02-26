const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/db");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Test DB connection
db.connect()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("DB connection error:", err));

// Health check
app.get("/", (req, res) => res.send("Smart Home Backend Running"));

// Listen on Railway port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));