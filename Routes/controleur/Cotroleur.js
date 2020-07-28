const express = require('express');
const connection = require('../../conf');
const characters = require('../model/characters');
const { getOneCharacterRep, postCharacterRep } = require('../View/Reponse');



const getAllCharaters = (req, res) => {
  characters.get((err, results) => {
    if (err) {
      return (
        res.status(500).json({ message: 'There are no Characters...' })
      )
    }
    res.json(results);
  })
};

const GetOneCharater = (req, res) => {
  const { id } = req.params
  characters.getid(id, (err, results) => {
    getOneCharacterRep(res, err, results)
  })
}

const PostCharaters = (req, res) => {
  const formData = req.body;
  characters.post(formData, (err, results) => {
    postCharacterRep(res, err, results, formData)
  })
}

module.exports = { getAllCharaters, GetOneCharater, PostCharaters };
