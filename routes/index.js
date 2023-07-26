var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

/* GET project page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET add project page. */
router.get('/projects/add', function(req, res, next) {
    res.render('projects/add', { title: 'Add Project' });
  });

/* GET edit project page. */
router.get('/projects/edit/:id', function(req, res, next) {
    res.render('projects/edit', { title: 'Edit Project' });
  });

/* GET service page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

module.exports = router;
