USE test;

START TRANSACTION;

INSERT INTO `animaux` (`id`, `photo`, `choix1`, `choix2`, `choix3`, `choix4`, `solution`, `description`) VALUES
(1, '/img/toscane_gab.jpg', 'un rat', 'un lievre', 'un chien', 'une tortue', 3, 'Nom : toscane \r\nProprietaire:gabriel'),
(2, '/img/image/tartiflette_elie.jpg', 'une baleine', 'une fourmie', 'un pelican', 'un chat', 4, 'Nom : Tartiflette\r\nProprio : Elie'),
(3, '/img/image/snatch.jpg', 'une abeille', 'un chien', 'un chat', 'une mouche', 2, 'Nom : snatch\r\nProprio : Romane'),
(4, '/img/image/rose_may_lena.jpg', 'dede', 'gege', 'meme', 'lele', 1, 'Nom: Rose_May\r\nProprio : Léna'),
(5, '/img/image/raclette_elie.jpg', 'a', 'b', 'c', 'd', 1, 'Nom : Raclette\r\nPropriétaire : Elie '),
(6, '/img/image/philo_romane.jpg', 'a', 'b', 'c', 'd', 1, 'Nom : philo\r\nPropriétaire : Romane'),
(7, '/img/image/nime_Romane.jpg', 'a', 'b', 'c', 'd', 1, 'Nom : Nime\r\nPropriétaire : Romane'),
(8, '/img/image/merry_pippin_camille.jpg', 'a', 'b', 'c', 'd', 1, 'Nom : Merry & Peppin\r\nPropriétaire : Camille'),
(9, '/img/merry_camille.jpg', 'a', 'b', 'c', 'd', 1, 'Nom : Merry\r\nParent : Camille'),
(10, '/img/lucky.jpg', 'a', 'b', 'c', 'd', 1, 'Nom : Lucky\r\nParent : Romane'),
(11, '/img/loumy_lena.jpg', 'a', 'b', 'c', 'd', 1, 'Nom : Loumy\r\nParent : Léna'),
(12, '/img/lady_naja.jpg', 'a', 'b', 'c', 'd', 1, 'Nom : Lady\r\nParent : Naja'),
(13, '/img/kira_romane.jpg', 'a', 'b', 'c', 'd', 1, 'Nom : Kira\r\nParent : Romane'),
(14, '/img/grosse_bete_mathieur.jpg', 'a', 'b', 'c', 'd', 1, 'Nom : Grosse bête\r\nParent : Mathieu'),
(15, '/img/grosse_bete4_mathieu.jpg', 'a', 'b', 'c', 'd', 1, 'Nom : Grosse bête\r\nParent : Mathieu');

COMMIT;
