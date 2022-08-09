let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();


//reloads to homepage
router.get("/login",(req,res,next) => {
    res.render(__dirname + "../../public/");
  })



  module.exports = router;