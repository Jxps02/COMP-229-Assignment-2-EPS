let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect to Project model
let Project = require('../models/projects');



// Get all projects
router.get('/', (req, res, next) => {
    Project.find((err, projectList) => {
        if (err) {
            return console.error(err);
        } else {
            res.render('projects/list', {title: 'Projects', projectList: projectList});
        }
    });
});

// Open add project page
router.get('/add', (req, res, next) => {
    res.render('projects/add', {title: 'Add Project'});
});

// Insert project data into MONGODB collection
// Funtionality 3. 4) Update Info in MongoDB
router.post('/add', (req, res, next) => {
    let newProject = Project({
        "title": req.body.title,
        "description": req.body.description,
        "deadline": req.body.deadline
    });

    Project.create(newProject, (err, Project) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            //Functionality 3. 5) Redirect to Home Page
            res.redirect('/projects');
        }
    });
});

// Retrieve data from MongoDB and open it on view (Form)
// Functionality 3. 1) Open Form with Current Project Information
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    Project.findById(id, (err, projectToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.render('projects/edit', {title: 'Edit Project', project: projectToEdit});
        }
    });
});

// Update data into MongoDB
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    // Functionality 3. 1) Open Form with Current Project Information
    let updatedProject = {
        title: req.body.title,
        description: req.body.description,
        deadline: req.body.deadline
    };

    Project.updateOne({ _id: id }, updatedProject, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/projects');
        }
    });
});

router.get('/delete/:id', (req, res, next) => {
    let id= req.params.id;

    Project.remove({_id: id}, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/projects');
        }
    });
});

module.exports = router;
