-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 13, 2025 at 06:43 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mycrud`
--

-- --------------------------------------------------------

--
-- Table structure for table `jsusers`
--

CREATE TABLE `jsusers` (
  `id` int(10) UNSIGNED NOT NULL,
  `prenume` varchar(50) NOT NULL,
  `nume` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `datanastere` date NOT NULL,
  `telefon` char(10) NOT NULL,
  `cnp` char(13) DEFAULT NULL,
  `poza` varchar(200) DEFAULT NULL,
  `dataadaugare` datetime NOT NULL DEFAULT current_timestamp(),
  `status` tinyint(4) NOT NULL DEFAULT 1 COMMENT '1 = vizibil, 0 = invizibil'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `jsusers`
--

INSERT INTO `jsusers` (`id`, `prenume`, `nume`, `email`, `datanastere`, `telefon`, `cnp`, `poza`, `dataadaugare`, `status`) VALUES
(1, 'Radulescu', 'Andrei', 'ion@demo.com', '2022-05-01', '0730071783', '2567387645163', '1749747562204_1_-nDzThtUdUrV3HqhQp_LaA.png', '2022-05-24 10:59:59', 1),
(2, 'Dan', 'Dobrescu', 'dan@test.ro', '2022-05-09', '0754354323', '2567387645163', '1749747592614_cover_Vue.png', '2022-05-24 10:59:59', 1),
(3, 'Ana', 'Popescu', 'ana@ana.com', '2022-05-11', '0788888434', '2567387645163', '1749747621932_How-to-Migrate-a-large-project-from-Vue-2-to-Vue-3.jpg', '2022-05-24 11:01:44', 1),
(4, 'Vali', 'Vasilescu', 'vali@vali.eu', '2022-05-15', '0755553333', '2567387645164', '1749747644316_vuejstools.jpg', '2022-05-24 11:01:44', 1),
(5, 'Ion', 'Ionescu', 'andreiradulescu1234@gmail.com', '2025-05-22', '0730071784', '2567387645163', '1749747667971_1_rRo3Pvs_THOJtNZ2l88R2Q.png', '2025-05-22 20:27:18', 1),
(6, 'Radulescu', 'Mihaela', 'raducu_mihaelaa123@yahoo.com', '2025-05-22', '0723232328', '2567387645163', '1749747930086_What-is-Vue.webp', '2025-05-22 20:31:37', 1),
(7, 'Raducu', 'Mihaela', 'raducu_mihaelaa125@yahoo.com', '2025-05-22', '0723232323', '2567387645164', '1749748563026_1_-nDzThtUdUrV3HqhQp_LaA.png', '2025-05-22 20:33:55', 1),
(10, 'nou', 'user nou', 'usernou@usernou.com', '2025-05-28', '0730071783', '2567387645163', '1748451975226_banner.png', '2025-05-28 20:06:15', 0),
(11, 'Alex', 'Ionescu', 'ionescu@demo.com', '2025-05-28', '0730071784', '2567387645163', '1748452595864_banner.png', '2025-05-28 20:16:35', 0),
(12, 'Angular', 'Angular', 'angular@test.com', '2025-06-04', '0730071784', '2567387645164', '1749749235645_vue-js-3-fundamentals-with-the-composition-api.jpg', '2025-06-04 20:34:07', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jsusers`
--
ALTER TABLE `jsusers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_unic` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jsusers`
--
ALTER TABLE `jsusers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
