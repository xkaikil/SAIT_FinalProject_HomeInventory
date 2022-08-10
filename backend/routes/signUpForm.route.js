
let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

const { ResourceStore } = require("i18next");
// Users Model
let userSchema = require("../models/Users");


// Create Users
router.post("/create-user", (req, res, next) => {

  userSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      const sgMail = require('@sendgrid/mail')
      sgMail.setApiKey("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")
      const msg = {
        to: req.body.email, // Change to your recipient
        from: 'huangjason812@gmail.com', // Change to your verified sender
        subject: 'Verification Link',
        text: 'Verification email',
        html: '<strong>Verification email </strong>',
      }
      sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error)
        })
      res.json(data);
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
          name: data.firstName,
          id: data._id
        });
      }
    })
    
  

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
