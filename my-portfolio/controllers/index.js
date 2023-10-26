var express = require('express');
var router = express.Router();

router.get('/home', function(req, res, next) {
  res.render('home'); // Make sure you have a 'home.ejs' view file
});

router.get('/about', function(req, res, next) {
  res.render('about'); // Make sure you have an 'about.ejs' view file
});

router.get('/projects', function(req, res, next) {
  res.render('projects'); // Make sure you have a 'projects.ejs' view file
});

router.get('/contact', function(req, res, next) {
  res.render('contact'); // Make sure you have a 'contact.ejs' view file
});

module.exports = router;
