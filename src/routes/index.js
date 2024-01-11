const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'Hello world!' });
});

router.get('/home', (req, res) => {
  res.send({ message: 'Hello home!' });
});

module.exports = router;
