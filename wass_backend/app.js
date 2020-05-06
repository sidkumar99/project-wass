var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var searchRouter = require("./routes/search");
var deleteRouter = require("./routes/delete");
var addRouter = require("./routes/add");
var editRouter = require("./routes/edit");
var newRouter = require("./routes/new");
var loginRouter = require("./routes/auth");
var friendRouter = require("./routes/friend");
var exploreRouter = require("./routes/explore");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

var mysql = require("mysql");
//Database connection
//Database connection
app.use(function (req, res, next) {
  res.locals.connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "wass",
    database: "project_wass",
  });
  res.locals.connection.connect();
  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/delete", deleteRouter);
app.use("/add", addRouter);
app.use("/edit", editRouter);
app.use("/search", searchRouter);
app.use("/new", newRouter);
app.use("/auth", loginRouter);
app.use("/friend", friendRouter);
app.use("/explore", exploreRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

var http = require("http");
module.exports = app;
var server = http.createServer(app);
server.listen(3000);
