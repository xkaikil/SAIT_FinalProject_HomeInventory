let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();


//reloads to homepage
router.get("/",(req,res,next) => {
    res.render("../../public/index.html");
  })
router.get("/login",(req,res,next) => {
    res.render("../../public/index.html");
  })



  module.exports = router;