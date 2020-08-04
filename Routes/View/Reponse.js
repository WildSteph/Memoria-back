
const express = require('express');
const connection = require('../../conf');


const getOneCharacterRep = (res, err, results) => { 
  if (err) {
    return (
      res.status(500).json({ message: 'Internal server error' })
    );
  }
  if (results.length === 0) {
    return (
      res.status(404).json({ message: 'PurchasesOrders ID not found' })
    );
  }
  return (
    res.json(results[0]))
}

const postCharacterRep= (res, err, results, formData) =>{
  if (err) {
    return (
      res.status(500).json({ message: "Internal server error" })
    )
  } else {
    return (
      res.status(201).json({ ...formData, id: results.insertId })
    )
  }
}

module.exports = { getOneCharacterRep , postCharacterRep };