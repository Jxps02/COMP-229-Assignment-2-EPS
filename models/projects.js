let mongoose = require('mongoose');

// Create Model of Project

let ProjectModel = mongoose.Schema(
    {
        "title" : String,
        "description" : String,
        "deadline" : Date
    },

    {
        collection : "projects"
    }
);


module.exports = mongoose.model('Projects', ProjectModel);


