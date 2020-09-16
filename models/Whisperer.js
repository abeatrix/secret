const mongoose = require('mongoose');

//Schema ('template', option configurational obj)
const WhispererSchema = new mongoose.Schema(
    {
        username: {type: String, required: [true, 'you must provide an email as your username.'], index: { unique: true }},
        name: {type: String, required: true},
        password: {type: String, required: true},
        birthday: {type: String, required: true, default: Date.now},
    }
)

const Whisperer = mongoose.model('Whisperer', WhispererSchema);

module.exports = Whisperer;
