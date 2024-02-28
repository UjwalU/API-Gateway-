const mongoose = require('mongoose');


const db2Schema = new mongoose.Schema({

    title: {type: String, required: true},
    content: { type: String, required: true},
});

const DB2Model = mongoose.model('DB2Model', db2Schema);

module.exports = DB2Model;