let mongoose = require("mongoose"),
	express = require("express"),
	router = express.Router();

// Inventory Model
let studentSchema = require("../models/Inventory");

// CREATE inventory item
router.post("/create-item", (req, res, next) => {
	studentSchema.create(req.body, (error, data) => {
		if (error) {
			return next(error);
		} else {
			console.log(data);
			res.json(data);
		}
	});
});

// READ inventory
router.get("/", (req, res) => {
	studentSchema.find((error, data) => {
		if (error) {
			return next(error);
		} else {
			res.json(data);
		}
	});
});

// UPDATE inventory
router
	.route("/update-item/:id")
	// Get Single item
	.get((req, res) => {
		studentSchema.findById(
			req.params.id, (error, data) => {
				if (error) {
					return next(error);
				} else {
					res.json(data);
				}
			});
	})

	// Update inventory Data
	.put((req, res, next) => {
		studentSchema.findByIdAndUpdate(
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
					console.log("Inventory updated successfully !");
				}
			}
		);
	});

// Delete inventory item
router.delete("/delete-item/:id",
	(req, res, next) => {
		studentSchema.findByIdAndRemove(
			req.params.id, (error, data) => {
				if (error) {
					return next(error);
				} else {
					res.status(200).json({
						msg: data,
					});
				}
			});
	});

module.exports = router;