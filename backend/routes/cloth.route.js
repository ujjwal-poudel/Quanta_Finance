const express = require("express");
const router = express.Router();
const clothController = require("../controllers/cloth.controller");

// get all cloth
router.get("/cloth", clothController.getAllCloth);
// Create and Save a new Cloth item
router.post("/cloth", clothController.createCloth);
// Delete a cloth with the specified id
router.delete("/cloth/:id", clothController.deleteCloth);
// Update a cloth with the specified id
router.put("/cloth/:id", clothController.updateCloth);

// show the cloth page welcome message to test
router.get("/cloth", (req, res) => {
    res.send("Welcome to the Cloth Page!");
});

module.exports = router;