const express = require('express');
const router = express.Router();

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home', data });  // render 'home.ejs'
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });  // render 'about.ejs'
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });  // render 'projects.ejs'
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });  // render 'contact.ejs'
});

router.get('/', function(req, res, next) {
  res.redirect('/home');
});

module.exports = router;
