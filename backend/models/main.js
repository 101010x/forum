const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const formSchema = mongoose.Schema({
    question_number: { type: Number, required: true, unique: true }
    question: { type: String, required: true },
    answer: { type: String, required: false },
    reason: { type: String, required: false },
    reason_question: { type: String, required: false },
    reason_answer: { type: String, required: false },
});

formSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Form', formSchema);
