const apiRoutes = require("../routes/apiRoutes");
const htmlRoutes = require("../routes/htmlRoutes");
const express = require("express");
const { animals } = require("../data/animals.json");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static("public"));
const fs = require("fs");
const path = require("path");
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// PORT
const PORT = 3001;

// *********************************** ROUTES ***********************************************

// listen for port
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:3001`);
});
