var express = require('express');
var router = express.Router();

router.get('/home', function(req, res, next) {
  res.render('layout', { title: 'Home', content: 'home' });
});

router.get('/about', function(req, res, next) {
  res.render('layout', { title: 'About Me', content: 'about' });
});

router.get('/projects', function(req, res, next) {
  res.render('layout', { title: 'Projects', content: 'projects' });
});

router.get('/contact', function(req, res, next) {
  res.render('layout', { title: 'Contact Me', content: 'contact' });
});

router.get('/', function(req, res, next) {
  res.redirect('/home');
});


module.exports = router;
