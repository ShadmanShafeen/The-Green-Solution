const mongoose = require('mongoose');

// Create schema
const questionSchema = new mongoose.Schema({
    
    question: {
        type: String,
        required: true
    },
    farmer: {
        type: String,
        required: true
    },
    NID: {
        type: String,
        required: true
    },
    answerCount: {
        type: Number,
        default: 0
    }, 
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// Create model
const Question = mongoose.model("Question" , questionSchema);

module.exports = Question;