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

  app.patch('/api/challenges/:id', (req, res) => {
    const { id } = req.params;
    Challenge.findByIdAndUpdate(id, req.body, { new: true })
      .then(challenge => res.json(challenge))
      .catch(err => res.json(err));
  });
};
