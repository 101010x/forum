const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const FormSchema = ({});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Form', FormSchema);
