const Cloth = require("../models/cloth.model");

// get all cloth
const getAllCloth = (req, res) => {
    Cloth.find()
        .then(cloth => res.json(cloth))
        .catch(err => res.status(400).json("Error: " + err));
}
// Delete a cloth with the specified id
const deleteCloth = (req, res) => {
    const clothId = req.params.id;
    Cloth.findByIdAndDelete(clothId)
        .then(() => res.json("Cloth deleted successfully"))
        .catch(err => res.status(400).json("Error: " + err));
}
// Update a cloth with the specified id
const updateCloth = (req, res) => {
    const clothId = req.params.id;
    const updateData = req.body;

    Cloth.findByIdAndUpdate(clothId, updateData, { new: true })
        .then(updatedCloth => {
            if (!updatedCloth) {
                return res.status(404).json("Cloth not found");
            }
            res.json(updatedCloth);
        })
        .catch(err => res.status(400).json("Error: " + err));
}
// Create and Save a new Cloth
const createCloth = (req, res) => {
    const { name, expenditure, date} = req.body;
    const newCloth = new Cloth({name, expenditure, date});
    newCloth.save();
    .then((cloth) => res.json(cloth))
    .catch(err => res.status(400).json("Error: " + err));
};

module.exports = {
    getAllCloth,
    deleteCloth,
    updateCloth,
    createCloth,
}
