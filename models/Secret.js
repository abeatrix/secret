const mongoose = require('mongoose');

//Schema ('template', option configurational obj)
const SecretSchema = new mongoose.Schema(
    {
        context: {type: String, required: true, index: { unique: true }},
        date: {type: String, required: true, default: Date.now},
        likes: {type: Number, required: true, default: 1},
    },
    { timestamps: { createdAt: 'created_at' } }
)

const Secret = mongoose.model('Secret', SecretSchema);

module.exports = Secret;
