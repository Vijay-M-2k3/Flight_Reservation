-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 18, 2023 at 07:19 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `JSRL`
--

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `UserId` int(5) NOT NULL,
  `UserTypeId` int(5) DEFAULT NULL,
  `ShopId` int(5) DEFAULT NULL,
  `Name` varchar(64) DEFAULT NULL,
  `ContactNo` varchar(100) DEFAULT NULL,
  `EmailAddress` varchar(100) DEFAULT NULL,
  `AddressId` int(5) DEFAULT NULL,
  `UserName` varchar(64) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `UserStatus` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`UserId`, `UserTypeId`, `ShopId`, `Name`, `ContactNo`, `EmailAddress`, `AddressId`, `UserName`, `Password`, `CreatedOn`, `UserStatus`) VALUES
(1, 1, 1, 'Sermarajan.s', '/hypJofjbzUmE3TJIM1zKQ==', NULL, NULL, 'sermarajan', '4XvE5C+Qbwt2gloH7CYQUA==', '2023-06-10 19:51:13', 1),
(2, 2, 1, 'John Samuel', '7U7pa05E9GRtJUewa0mzIg==', NULL, 2, 'john', '4XvE5C+Qbwt2gloH7CYQUA==', '2023-06-10 20:08:14', 1),
(3, 2, 1, 'Lakshan', 'k2vOGTdMfUWVcwAalj1Ouw==', NULL, 2, 'lakshan', '4XvE5C+Qbwt2gloH7CYQUA==', '2023-06-10 22:33:17', 1),
(4, 1, 3, 'Srinivasan', 'pJvirNU5Sr7X7+ji5nBNAA==', NULL, NULL, 'Srinivasan', '4XvE5C+Qbwt2gloH7CYQUA==', '2023-06-11 08:22:45', 1),
(5, 1, 2, 'Iniya', '+elgYr/wcOeLKOK+AqCpzQ==', NULL, NULL, 'Iniya', '4XvE5C+Qbwt2gloH7CYQUA==', '2023-06-11 08:11:30', 1),
(6, 1, 1, 'Selva Reeta', 'P8adW6gQq663Qin4t0lMLw==', NULL, NULL, 'selvareeta', '4XvE5C+Qbwt2gloH7CYQUA==', '2023-06-11 11:02:08', 1),
(7, 2, 1, 'Janaki', '6mWExFgjKIDVLFnNj9P/Zw==', NULL, 7, 'janaki', '4XvE5C+Qbwt2gloH7CYQUA==', '2023-06-11 12:27:10', 1),
(8, 2, 1, 'Nithin', 'EDwW8gTZ7MPlv0Nq/usguw==', NULL, 6, 'nithin', '4XvE5C+Qbwt2gloH7CYQUA==', '2023-06-11 12:29:55', 1),
(9, 1, 1, 'test', '7U7pa05E9GRtJUewa0mzIg==', NULL, NULL, 't', '8z+Bl5Ts1uZ030Hg5vMzbg==', '2023-06-11 12:36:42', 1),
(10, 2, 1, 'Lawrance', 'XTwveoQFInWYHfLWhwkufA==', NULL, 8, 'test', '4XvE5C+Qbwt2gloH7CYQUA==', '2023-06-11 12:40:36', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`UserId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
