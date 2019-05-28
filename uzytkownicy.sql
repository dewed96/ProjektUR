
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS `uzytkownicy` (
`id` int(11) NOT NULL,
  `user` text COLLATE utf8_polish_ci NOT NULL,
  `pass` text COLLATE utf8_polish_ci NOT NULL,
  `email` text COLLATE utf8_polish_ci NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;


INSERT INTO `uzytkownicy` (`id`, `user`, `pass`, `email`) VALUES
(1, 'adam', 'adam', 'adam@gmail.com'),
(2, 'marek', 'marek', 'marek@gmail.com'),
(3, 'anna', 'anna', 'anna@gmail.com'),
(4, 'andrzej', 'andrzej', 'andrzej@gmail.com'),
(5, 'justyna', 'justyna', 'justyna@gmail.com'),
(6, 'kasia', 'kasia', 'kasia@gmail.com'),
(7, 'beata', 'beata', 'beata@gmail.com'),
(8, 'jakub', 'jakub', 'jakub@gmail.com'),
(9, 'janusz', 'janusz', 'janusz@gmail.com'),
(10, 'roman', 'roman', 'roman@gmail.com');

ALTER TABLE `uzytkownicy`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `id` (`id`);


ALTER TABLE `uzytkownicy`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;

