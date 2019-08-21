const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/', (req, res) => {
  User.find()
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

router.post('/new', (req, res) => {
  data.map(data => {
    User.create;
  });
});

module.exports = router;
