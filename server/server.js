const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

// read .env file
dotenv.config();

// read and parse .env.local file
try {
  const localConfig = dotenv.parse(fs.readFileSync('.env.local'));
  process.env = {
    ...process.env,
    ...localConfig
  };
} catch (error) {}

app.use('/api/challenges', require('./api/challenge'));
app.use('/api/user', require('./api/user'));
const port = 4000;

// setup mongoose
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

app.listen(process.env.PORT || port, () => {
  console.log(`Server startet on port ${port}`);
});

// static file serving
app.use(express.static(path.join(__dirname, 'build')));

// catch all handler for client deeplinks
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
