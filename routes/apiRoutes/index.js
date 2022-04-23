const router = require("express").Router();

// import database
const data = require("../../db/db.json");

router.get("/notes", (req, res) => {
  res.json(data);
});


module.exports = router;