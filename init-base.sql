-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 14 mars 2025 à 14:33
-- Version du serveur : 10.11.6-MariaDB-0+deb12u1
-- Version de PHP : 8.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Structure de la table `animeaux`
--

CREATE TABLE `animeaux` (
  `id` int(11) NOT NULL,
  `photo` varchar(100) NOT NULL,
  `choix1` varchar(100) NOT NULL,
  `choix2` varchar(100) NOT NULL,
  `choix3` varchar(100) NOT NULL,
  `choix4` varchar(100) NOT NULL,
  `solution` int(11) NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



INSERT INTO `animeaux` (`id`, `photo`, `choix1`, `choix2`, `choix3`, `choix4`, `solution`, `description`) VALUES
(1, '/info303/image/toscane_gab.jpg', 'un rat', 'un lievre', 'un chien', 'une tortue', 3, 'Nom : toscane \r\nProprietaire:gabriel'),
(2, '/info303/image/tartiflette_elie.jpg', 'une baleine', 'une fourmie', 'un pelican', 'un chat', 4, 'Nom : Tartiflette\r\nProprio : Elie'),
(3, '/info303/image/snatch.jpg', 'une abeille', 'un chien', 'un chat', 'une mouche', 2, 'Nom : snatch\r\nProprio : Romane'),
(4, '/info303/image/rose_may_lena.jpg', 'dede', 'gege', 'meme', 'lele', 1, 'Nom: Rose_May\r\nProprio : Léna'),
(5, '/info303/image/raclette_elie.jpg', 'a', 'b', 'c', 'd', 1, 'Nom : Raclette\r\nPropriétaire : Elie '),
(6, '/info303/image/philo_romane.jpg', 'a', 'b', 'c', 'd', 1, 'Nom : philo\r\nPropriétaire : Romane'),
(7, '/info303/image/nime_Romane.jpg', 'a', 'b', 'c', 'd', 1, 'Nom : Nime\r\nPropriétaire : Romane'),
(8, '/info303/image/merry_pippin_camille.jpg', 'a', 'b', 'c', 'd', 1, 'Nom : Merry & Peppin\r\nPropriétaire : Camille');


--
-- Index pour la table `animeaux`
--
ALTER TABLE `animeaux`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `animeaux`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

