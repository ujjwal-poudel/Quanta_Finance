const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema({
    name: String,
    expenditure: Number,
    date: Date,
});

const Grocery = mongoose.model("Grocery", clothSchema);
module.exports = groceries;