const mongoose = require("mongoose");

// Create schema
const farmerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true  // Use 'required', not 'require'
    },
    contact: {
        type: String,
        required: true,
        unique: true    // Use 'unique', not 'unique: true'
    },
    NID: {
        type: String,
        required: true,
        unique: true
    }
   
});
// Create model
const Farmer = mongoose.model("Farmer", farmerSchema); // Capitalize the model name

module.exports = Farmer;
