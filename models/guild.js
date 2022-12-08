const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    id: String,
    prefix: { 'type': String, 'default': '!' },
    logChannel: {'type': String, 'default': '1050140471491580097'}
});

module.exports = mongoose.model('Guild', guildSchema);