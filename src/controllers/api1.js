const DB1Model = require('../models/db1Model');
let currentIndex = 0;

exports.getAllData = (req, res) => {
    DB1Model.find()
      .then(data => res.json(data))
      .catch(err => res.status(500).json({error: err.message}));
};

exports.createData = (req, res) => {
    const { name, age } = req.body;
    const newData = new DB1Model({index: ++currentIndex, name, age });
    newData.save()
      .then(data => res.json(data))
      .catch(err => res.status(400).json({ error: err.message }));
  };

exports.updateData = (req, res) =>{
    const { id } =req.params;
    const { name, age }= req.body;
    DB1Model.findByIdAndUpdate({index: id}, {name,age}, {new: true})
      .then(data => res.json(data))
      .catch(err => res.status(400).json({error: err.message}));
};

exports.deleteData = (req,res) =>{
    const {id} = req.params;
    DB1Model.findByIdAndDelete({index: id})
      .then(() => res.json({message: 'Data deleted successfully'}))
      .catch(err => res.status(400).json({err: err.message}));
};