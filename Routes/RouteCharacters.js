const express = require('express');
const connection = require('../conf');
const router = express.Router();

router.get('/', (req, res) => {
  connection.query('SELECT * from Characters', (err, results) => {
    if (err) {
      return (
        res.status(500).json({ message: 'There are no Characters...' })
      )
    }
    res.json(results);
  })
});

module.exports = router; 