let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect to Employee model
let Employee = require('../models/employees');

// Manage all routes
router.get('/', (req, res, next) => {
    Employee.find((err, employeeList) => {
        if (err) {
            return console.error(err);
        } else {
            res.render('employees/list', {title: 'Employees Information', employeeList: employeeList});
        }
    });
});

// To open add employee page
router.get('/add', (req, res, next) => {
    res.render('employees/add', {title: 'Add Employee'});
});

// Insert employee data into MONGODB collection
router.post('/add', (req, res, next) => {
    let newEmployee = Employee({
        "name": req.body.ename,
        "address": req.body.eaddress,
        "contact": req.body.econtact
    });

    Employee.create(newEmployee, (err, Employee) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/employees');
        }
    });
});

// Retrieve data from MongoDB and open it on view (Form)
// Using ID- unique
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    Employee.findById(id, (err, employeeToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            // Write code to display data in view
            res.render('employees/edit', {title: 'Edit Employee', employee: employeeToEdit});
        }
    });
});

// Write code to store updated data into MongoDB
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    let updatedEmployee = Employee({
        "_id": id,
        "name": req.body.ename,
        "address": req.body.eaddress,
        "contact": req.body.econtact
    });

    Employee.updateOne({_id: id}, updatedEmployee, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/employees');
        }
    });
});

router.get('/delete/:id', (req, res, next) => {
    let id= req.params.id;

    Employee.remove({_id: id}, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/employees');
        }
    });
});

module.exports = router;
