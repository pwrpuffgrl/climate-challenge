const express = require('express');
const router = express.Router();

const Challenge = require('../models/Challenge');

router.get('/', (req, res) => {
  Challenge.find()
    .then(challenges => res.json(challenges))
    .catch(err => res.json(err));
});

router.post('/', (req, res) => {
  Challenge.create(req.body)
    .then(challenge => res.json(challenge))
    .catch(err => res.json(err));
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  await Challenge.findByIdAndUpdate(id, req.body, { new: true });
  const foundChallenges = await Challenge.find();

  res.json(foundChallenges);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Challenge.findByIdAndRemove(id)
    .then(challenge => res.json({ success: true }))
    .catch(err => res.json(err));
});

module.exports = router;
