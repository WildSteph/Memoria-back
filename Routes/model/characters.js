const express = require('express');
const connection = require('../../conf');
const characters = {}


characters.get = (callback) => {
    connection.query('SELECT * from Characters', (err, results, fields) => {
        callback(err, results, fields);
    })
}

characters.getid = (id, callback) => {
    connection.query('SELECT * from Characters WHERE id = ?', id, (err, results) => {
        callback(err, results);
    })
}

characters.post = (formData, callback) => {
    connection.query('INSERT INTO Characters SET ?', formData, (err, results) => {
        callback(err, results);
    })
}


module.exports = characters;

