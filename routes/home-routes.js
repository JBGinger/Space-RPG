const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Inventory, Item, Planet } = require("../models");

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('layouts/main');
  });
  
  module.exports = router;
