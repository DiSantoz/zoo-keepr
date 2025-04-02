const express = require("express");
const { animals } = require("./data/animals.json");
const app = express();

// fetch json data
app.get("/api/animals", (req, res) => {
  res.json(animals);
});

// listen for port
app.listen(3001, () => {
  console.log(`server is running at http://localhost:3001/api/animals`);
});
