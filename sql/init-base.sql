SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";



-- Creation of the table 'animeaux'
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

-- Definition of primary key
ALTER TABLE `animeaux`
  ADD PRIMARY KEY (`id`);

-- ACtivation of auto-incrementy for id
ALTER TABLE `animeaux`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

COMMIT;
