const express = require("express");
const router = express.Router();
const GroceriesController = require("../controllers/groceries.controller");

// get all groceries
router.get("/groceries", GroceriesController.getAllGrocery);
// Create and Save a new groceries
router.post("/groceries", GroceriesController.createGrocery);
// Delete a groceries with the specified id
router.delete("/groceries/:id", GroceriesController.deleteGrocery);
// Update a groceries with the specified id
router.put("/groceries/:id", GroceriesController.updateGrocery);

// show the grocery page welcome message to test
router.get("/grocery", (req, res) => {
    res.send("Welcome to the grocery page");
});
module.exports = router;
