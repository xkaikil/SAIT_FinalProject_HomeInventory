let mongoose = require("mongoose"),
	express = require("express"),
	router = express.Router();

// Inventory Model
let userSchema = require("../models/Users");

router.get("/view-users", (req, res) => {
    userSchema.find((error, data) => {
      if (error) {
        return next(error);
      } else {
        console.log("success");
        res.json(data);
      }
    });
  });


  module.exports = router;