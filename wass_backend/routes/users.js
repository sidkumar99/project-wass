var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log(req.body);
  res.locals.connection.query("SELECT * from fashion_item", function (
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
});

module.exports = router;
