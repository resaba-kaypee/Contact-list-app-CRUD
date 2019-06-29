const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/EmployeeDB';
const mongoOptions = { useNewUrlParser: true };
require('./employee.model')
mongoose.connect(url, mongoOptions, (err) => {
  if(err) console.log(`Failed to connect to db` + err);
  else console.log(`Connected to MongoDB`);
})