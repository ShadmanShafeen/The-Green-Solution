const mongoose = require("mongoose");

//Create schema
const agronomistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true,
        unique:true
    },
    NID: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create model
const Agronomist = mongoose.model("Agronomist" , agronomistSchema);

module.exports = Agronomist;