// controllers/api2.js

const DB2Model = require('../models/db2Model'); // Import db2 Model


exports.getAllData = (req, res) => {
  DB2Model.find()
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: err.message }));
};


exports.createData = (req, res) => {
  const { title, content } = req.body;
  const newData = new DB2Model({ title, content });
  newData.save()
    .then(data => res.json(data))
    .catch(err => res.status(400).json({ error: err.message }));
};


exports.updateData = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  DB2Model.findByIdAndUpdate(id, { title, content }, { new: true })
    .then(data => res.json(data))
    .catch(err => res.status(400).json({ error: err.message }));
};


exports.deleteData = (req, res) => {
  const { id } = req.params;
  DB2Model.findByIdAndDelete(id)
    .then(() => res.json({ message: 'Data deleted successfully' }))
    .catch(err => res.status(400).json({ error: err.message }));
};
