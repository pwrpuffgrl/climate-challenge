module.exports = function(app) {
  const Challenge = require('./models/Challenge');

  app.get('/api/challenges', (req, res) => {
    Challenge.find()
      .then(challenges => res.json(challenges))
      .catch(err => res.json(err));
  });

  app.post('/api/challenges', (req, res) => {
    Challenge.create(req.body)
      .then(challenge => res.json(challenge))
      .catch(err => res.json(err));
  });

  // app.patch('/api/challenges/:id', (req, res) => {
  //   const { id } = req.params;
  //   Challenge.findByIdAndUpdate(id, req.body, { new: true })
  //     .then(challenge => res.json(challenge))
  //     .catch(err => res.json(err));
  // });

  app.patch('/api/challenges/:id', async (req, res) => {
    const { id } = req.params;
    await Challenge.findByIdAndUpdate(id, req.body, { new: true });
    const foundChallenges = await Challenge.find();

    res.json(foundChallenges);
  });

  app.delete('/api/challenges/:id', (req, res) => {
    const { id } = req.params;
    Challenge.findByIdAndRemove(id)
      .then(challenge => res.json({ success: true }))
      .catch(err => res.json(err));
  });
};
