var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  console.log("made it here");
  console.log(req.body.id);
  res.locals.connection.query(
    "UPDATE products SET name =" +
      '"' +
      req.body.name +
      '"' +
      " " +
      "WHERE id=" +
      req.body.id,
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
});

module.exports = router;
