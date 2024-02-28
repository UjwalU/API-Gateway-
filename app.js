const express = require('express');
const mongoose = require('mongoose');
const api1Routes = require('./src/routes/api1Routes');
const api2Routes = require('./src/routes/api2Routes');
const commonApiRoutes = require('./src/routes/commonApiRoutes');


//const DB1Model = require('./models/db1Model');
//const DB2Model = require('./models/db2Model');

const app = express();
app.use(express.json());

const  mongoURI = 'mongodb://127.0.0.1:27017/test';

mongoose.connect(mongoURI, {
  //useNewUrlParser: true,
  //useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB Connected');
}).catch(err => {
  console.error('MongoDB connection error', err);
});

//Routes
app.use('/api1', api1Routes);
app.use('/api2', api2Routes);
app.use('/commonapi', commonApiRoutes);


// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
  console.log('Server is running on port ${PORT}');
});