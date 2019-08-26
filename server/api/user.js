const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/', (req, res) => {
  User.find()
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

router.post('/new', (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndUpdate(id, req.body, { new: true });
  const foundUser = await User.find();

  res.json(foundUser);
});

module.exports = router;
