var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  console.log("made it here");
  console.log(req.body.id);
  res.locals.connection.query(
    "insert into products(id,name,brand,status,metadata) values(" +
      req.body.id +
      "," +
      '"' +
      req.body.name +
      '"' +
      "," +
      '"' +
      req.body.brand +
      '"' +
      "," +
      req.body.status +
      "," +
      req.body.metadata +
      ")",
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
});

module.exports = router;
