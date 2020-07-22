DROP DATABASE IF EXISTS Memoria; 

CREATE DATABASE Memoria; 

USE Memoria; 

/* Création des tables  */

CREATE TABLE Characters ( 
id INT AUTO_INCREMENT PRIMARY KEY, 
characterName VARCHAR(255),
characterPhysique INT,
characterSocial INT,
characterMental INT,
characterStory INT
);