const express = require('express');
const router = express.Router();

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });  // render 'home.ejs'
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });  // render 'about.ejs'
});

router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Project' });  // render 'project.ejs'
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });  // render 'contact.ejs'
});

router.get('/', function(req, res, next) {
  res.redirect('/home');
});

module.exports = router;
