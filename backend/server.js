let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
let dbConfig = require("./database/db");

//Express Route
const userRoute = require("../backend/routes/signUpForm.route");

//Connecting MongoDb Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db).then(
  () => {
    console.log("Database successfully connected!");
  },
  (error) => {
    console.log("Could not connect to database : " + error);
  }
);

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/users", userRoute);

//cors header
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

//404 error
app.use((req, res, next) => {
  res.status(404).send("Error 404 lol!");
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCount) err.statusCount = 500;
  res.status(err.statusCode).send(err.message);
});
