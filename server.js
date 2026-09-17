// Create Server
const express = require("express");
const bodyParser = require("body-parser");

// Database connection
const db = require("./db");

// Routes
const empRoute = require("./Route/empRoute");
const studentRoute = require("./Route/studentRoute");
require('dotenv').config();

const app = express();
const PORT=process.env ||3000;

// Body Parser
app.use(bodyParser.json());

// Home Route
app.get("/", (req, res) => {
  res.send("This is home page");
});

// Employee Routes
app.use("/emp", empRoute);

// Student Routes
app.use("/student", studentRoute);


console.log("Mongo URL:", process.env.MONGO_URL);
// Start Server
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
