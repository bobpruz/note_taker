const router = require("express").Router();

const res = require("express/lib/response");
// import database
const data = require("../../db/db.json");

// get data
router.get("/notes", (req, res) => {
  res.json(data);
});

// add new data
router.post("/notes", (req, res) => {
  if(data.length === 0)
  {
      req.body.id = '0';
  }
  else
  {
      req.body.id = (parseInt(data[data.length-1].id)+1).toString();
  }
  data.push(req.body);
  res.json(data)
});

module.exports = router;
