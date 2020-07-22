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
characterStory VARCHAR(255)
);

/*données de test */

INSERT INTO Characters (`id`, `characterName`, `characterPhysique`, `characterSocial`, `characterMental`, `characterStory`) VALUES (1, 'Tirry', 10, 50, 30, 'paysan de Memoria');