const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    value: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    since: {
        type: Date,
        required: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Todo', TodoSchema);