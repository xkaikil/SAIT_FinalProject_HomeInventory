let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Users Model
let userSchema = require("../models/Users");


// Create Users
router.post("/create-user", (req, res, next) => {

  userSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// Read Users
router.get("/", (req, res) => {
  userSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Users
router
  .route("/update-user/:id")
  // Get Single Student
  .get((req, res) => {
    userSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  })

  // Update Users Data
  .put((req, res, next) => {
    userSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
          console.log(error);
        } else {
          res.json(data);
          console.log("user updated successfully !");
        }
      }
    );
  });

// Delete Users
router.delete("/delete-user/:id", (req, res, next) => {
  userSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

//Validate Login
router.post("/login", (req, res, next) => {
  userSchema
    .findOne({
      email: req.body.email,
      password: req.body.password,
    }, (error,data) => {
      if (error) {
        return next(error);
      }if (!data) {
        return res.status(401).end('Invalid Credentials');
      } else {
        res.status(200).json({
          msg: data,
        });
      }
    })
    
      /** 
      if (data.password === req.body.password) {
        res.json(data);
        console.log("User logged in successfully !");
      } else {
        console.log("Password or email is not correct!");
        res.json({
          message: "wrong credentials",
        });
      }
      */
    
});

module.exports = router;
