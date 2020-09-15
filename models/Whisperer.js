const mongoose = require('mongoose');

//Schema ('template', option configurational obj)
const WhispererSchema = new mongoose.Schema(
    {
        username: {type: String, required: [true, 'you must provide a username.']},
        birthday: {type: String, required: true, default: Date.now},
    }
)

const Whisperer = mongoose.model('Whisperer', WhispererSchema);

module.exports = Whisperer;
