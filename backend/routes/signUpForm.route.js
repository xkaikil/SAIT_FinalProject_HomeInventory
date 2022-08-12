let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

const { ResourceStore } = require("i18next");
// Users Model
let userSchema = require("../models/Users");

// Create Users
router.post("/create-user", (req, res, next) => {
req.body.status = "Unactivated";
  userSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {

      var emailText = '<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body><a href="http://localhost:3000/emailVerification/' + data._id + '">Click this for Verification</a></body></html>'

      const sgMail = require("@sendgrid/mail");
      sgMail.setApiKey(
        "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"
      );
      const msg = {
        to: req.body.email, // Change to your recipient
        from: "huangjason812@gmail.com", // Change to your verified sender
        subject: "Verification Link",
        text: "Verification email",
        html: emailText, 
      };
      sgMail
        .send(msg)
        .then(() => {
          console.log("Email sent");
        })
        .catch((error) => {
          console.error(error);
        });

      return res.status(200).end();
    }
  });
});

//Validate Login
router.post("/login", (req, res, next) => {
  userSchema.findOne(
    {
      email: req.body.email,
      password: req.body.password,
      status: "Activated"
    },
    (error, data) => {
      if (error) {
        return next(error);
      }
      if (!data) {
        return res.status(401).end("Invalid Credentials or Unactivated Account");
      }else {
        res.status(200).json({
          name: data.firstName,
          id: data._id,
          role: data.role,
        });
      }
    }
  );

  /**
     * 
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
     */
});

module.exports = router;
