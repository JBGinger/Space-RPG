const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Inventory, Item, Planet } = require("../models");

router.get('/', (req, res) => {
  res.render('login');
});

router.get('/inventory', (req, res) => {
  // if (!req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }  
  res.render('inventory', { name: "Example" });
});

router.get('/dashboard', (req, res) => {
  // if (!req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }  
  res.render('dashboard');
});

router.get('/explore', (req, res) => {
  // if (!req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }
  res.render('planetselect');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
