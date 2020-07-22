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

router.get('/:id', (req, res) => {
  const { id } = req.params
  connection.query('SELECT * from Characters WHERE id = ?',id, (err, results) => {
    if (err) {
      return (
        res.status(500).json({ message: 'Internal server error' })
      )
    }
    if (results.length === 0) {
      return (
        res.status(404).json({ message: 'PurchasesOrders ID not found' })
      )
    }
    res.json(results[0]) 
  })
});

router.post('/', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO Characters SET ?', formData, (err, results) => {
    if (err) {
      return (
        res.status(500).json({ message: "Internal server error" })
      )
    } else {
      return (
        res.status(201).json({ ...formData, id: results.insertId })
      )
    }
  });
});

module.exports = router; 