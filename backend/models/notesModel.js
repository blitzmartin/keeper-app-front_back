const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    title: String,
    content: String
})


module.exports = new mongoose.model('Note', notesSchema, "notes");