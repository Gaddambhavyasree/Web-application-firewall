const mongoose = require('mongoose');

const AttackSchema = new mongoose.Schema({
    ip: String,
    url: String,
    payload: String,
    attackType: String,
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('AttackLog', AttackSchema);