const express = require('express');
const connection = require('../conf');
const router = express.Router();
const { getAllCharaters , GetOneCharater, PostCharaters } = require ('./controleur/Cotroleur');


router.get('/', getAllCharaters); 
 
router.get('/:id' , GetOneCharater);
    
router.post('/', PostCharaters);


router.put('/put/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const formData = req.body;
  connection.query('UPDATE  Characters SET ? WHERE id = ?', [formData, id], (err, results) => {
    if (err) {
      return (
        res.status(500).json({ message: "Internal server error" })
      )
    }
    if (results.changedRows === 0) {
      return (
        res.status(404).json({ message: 'User ID not found' })
      )
    }
    res.status(200).json({ message: `Changed row ${results.changedRows}` });
  });
});

router.delete('/del/:id', (req, res) => {
  const id = req.params.id

  connection.query('DELETE FROM Characters WHERE id = ?', [id], err => {
    if (err) {
      return (
        res.status(500).json({ message: "Internal server error" })
      )
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router; 