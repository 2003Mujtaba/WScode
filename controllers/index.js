const express = require('express');
const router = express.Router();

router.get('/home', function(req, res, next) {
  console.log("Rendering home with title:", 'Home');
  res.render('layout', { title: 'Home', content: 'home-content' });
});

router.get('/about', function(req, res, next) {
  console.log("Rendering home with title:", 'Home');
  res.render('layout', { title: 'About Me', content: 'about-section' });
});

router.get('/projects', function(req, res, next) {
  console.log("Rendering home with title:", 'Home');
  res.render('layout', { title: 'Projects', content: 'projects-section' });
});

router.get('/contact', function(req, res, next) {
  console.log("Rendering home with title:", 'Home');
  res.render('layout', { title: 'Contact Me', content: 'contact-container' });
});

router.get('/', function(req, res, next) {
  console.log("Rendering home with title:", 'Home');
  res.redirect('/home');
});

module.exports = router;
