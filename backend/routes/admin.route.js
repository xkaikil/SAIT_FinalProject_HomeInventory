let mongoose = require("mongoose"),
	express = require("express"),
	router = express.Router();



// Category Model
let categorySchema = require("../models/Category")

router.get("/view-category", (req, res) => {

  categorySchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      //console.log("success");
      res.json(data);
    }
  });
});

//create user
router.post("/create-category", (req, res, next) => {
  console.log(req.body)
	categorySchema.create(req.body, (error, data) => {
		if (error) {
			return next(error);
		} else {
			console.log(data);
			res.json(data);
		}
	});
});

 // Update Users
 router
 .route("/update-category/:id")
 // Get Single Student
 .get((req, res, next) => {
  console.log(req.params.id);
   categorySchema.findById(req.params.id, (error, data) => {
     if (error) {
       return next(error);
     } else {
      
       res.json(data);
     }
   });
 })
 
 // Update Users Data
 .put((req, res, next) => {
   categorySchema.findByIdAndUpdate(
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
         console.log("category updated successfully !");
       }
     }
   );
 });
 
 // Delete Users
 router.delete("/delete-category/:id", (req, res, next) => {
 categorySchema.findByIdAndRemove(req.params.id, (error, data) => {
   if (error) {
     return next(error);
   } else {
     res.status(200).json({
       msg: data,
     });
   }
 });
 });


// Inventory Model
let userSchema = require("../models/Users");


//Getting users
router.get("/view-users", (req, res) => {
    userSchema.find((error, data) => {
      if (error) {
        return next(error);
      } else {
        //console.log("success");
        res.json(data);
      }
    });
  });


  // Update Users
router
.route("/update-user/:id")
// Get Single Student
.get((req, res, next) => {
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

//create user
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






// Verifying link
router
.route("/Verify-Link/:id")
.put((req, res, next) => {
  
  userSchema.findByIdAndUpdate(
    req.params.id,
    {
      status: "Activated",
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















  module.exports = router;