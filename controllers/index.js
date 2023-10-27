var express = require('express');
var router = express.Router();

router.get('/home', function(req, res, next) {
  res.render('layout', { title: 'Home', content: 'home-content' });
});

router.get('/about', function(req, res, next) {
  res.render('layout', { title: 'About Me', content: 'about-section' });
});

router.get('/projects', function(req, res, next) {
  res.render('layout', { title: 'Projects', content: 'projects-section' });
});

router.get('/contact', function(req, res, next) {
  res.render('layout', { title: 'Contact Me', content: 'contact-container' });
});

router.get('/', function(req, res, next) {
  res.redirect('/home');
});

router.get('/', (req, res) => {
  res.render('layout', { title: 'Homepage' });
});


module.exports = router;
