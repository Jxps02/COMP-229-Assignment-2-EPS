let mongoose = require('mongoose');

// Create Model for Employee
let EmployeeModel = mongoose.Schema({
    "name" : String,
    "address" : String,
    "contact" : String
}, {
    collection : "employees"
});

module.exports = mongoose.model('Employees', EmployeeModel);
