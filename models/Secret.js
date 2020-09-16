const mongoose = require('mongoose');

//Schema ('template', option configurational obj)
const SecretSchema = new mongoose.Schema(
    {
        context: {type: String, required: true, index: { unique: true }},
        date: {type: String, required: true, default: Date.now},
        like: {type: Number, required: true, default: 1},
    }
)

const Secret = mongoose.model('Secret', SecretSchema);

module.exports = Secret;
