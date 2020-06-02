const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const formSchema = mongoose.Schema({});

formSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Form', formSchema);
