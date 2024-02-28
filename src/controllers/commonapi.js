//controllers/commonapi.js

const axios = require('axios');
const DB1Model = require('../models/db1Model');
const DB2Model = require('../models/db2Model');


exports.getAllDataFromDB1 = async (req, res) =>{
    try{
        const data = await DB1Model.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.getAllDataFromDB2 = async(req, res) =>{
    try{
        const data = await DB2Model.find();
        res.json(data);
    }catch (error){
        res.status(500).json({error: error.message});
    }
};

