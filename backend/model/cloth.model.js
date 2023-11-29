const mongoose = require("mongoose");

const clothSchema = new mongoose.Schema({
    name: String,
    expenditure: Number,
    date: Date,
});

const Cloth = mongoose.model("Cloth", clothSchema);
module.exports = Cloths;