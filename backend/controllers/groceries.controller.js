const Groceries = require("../models/groceries.model");

// get all groceries
const getAllGrocery = (req, res) => {
    Cloth.find()
        .then(groceries => res.json(groceries))
        .catch(err => res.status(400).json("Error: " + err));
}

// Create and Save a new Grocery
const createGrocery = (req, res) => {
    const { name, expenditure, date} = req.body;
    const newGrocery = new Groceries({name, expenditure, date});
    newGrocery.save();
    .then((grocery) => res.json(grocery))
    .catch(err => res.status(400).json("Error: " + err));
    
}

// Delete a groceries with the specified id
const deleteGrocery = (req, res) => {
    const groceryId = req.params.id;
    Groceries.findByIdAndDelete(groceryId)
        .then(() => res.json("Grocery deleted successfully"))
        .catch(err => res.status(400).json("Error: " + err));
}

// Update a groceries with the specified id
const updateGrocery = (req, res) => {
    const groceryId = req.params.id;
    const updateData = req.body;
    Groceries.findByIdAndUpdate(groceryId, updateData, { new: true })
    .then(updatedGrocery => {
        if (!updatedGrocery) {
            return res.status(404).json("Grocery not found");
        }
        res.json(updatedGrocery);
    })
    .catch(err => res.status(400).json("Error: " + err));

}

module.exports = {
    getAllGrocery,
    createGrocery,
    deleteGrocery,
    updateGrocery
}
