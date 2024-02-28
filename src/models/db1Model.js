const mongoose = require('mongoose');

const db1Schema = new mongoose.Schema({
    id: {type: Number, required: true },
    name: { type: String, required: true },
    age: { type: String, requirec: true },
});

const DB1Model = mongoose.model('DB1Model', db1Schema);

module.exports = DB1Model;