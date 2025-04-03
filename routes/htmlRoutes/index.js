const path = require("path");
const router = require("express").Router();

// homepage
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// animals page
router.get("/animals", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/animals.html"));
});

// zookeeper page
router.get("/zookeepers", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/zookeepers.html"));
});

// wildcard route
router.get("*wildcard", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
