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
-- Table structure for table `Shops`
--

CREATE TABLE `Shops` (
  `ShopId` int(5) NOT NULL,
  `ShopName` varchar(64) NOT NULL,
  `Category` varchar(100) DEFAULT NULL,
  `EmailAddress` varchar(100) DEFAULT NULL,
  `AddressId` int(5) DEFAULT NULL,
  `ContactNo` varchar(64) DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ShopStatus` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Shops`
--

INSERT INTO `Shops` (`ShopId`, `ShopName`, `Category`, `EmailAddress`, `AddressId`, `ContactNo`, `CreatedOn`, `ShopStatus`) VALUES
(1, 'JSRL', 'Grocery', NULL, 1, '/hypJofjbzUmE3TJIM1zKQ==', '2023-06-10 19:51:13', 1),
(2, 'Amaron', 'Batteries', NULL, 3, '1iUeUP4/ceLdrkuYU7m1Rw==', '2023-06-11 08:11:30', 1),
(3, 'Brotel', 'Chocolate', NULL, 4, 'MeoTzuiizD3/4HMMZZH1/w==', '2023-06-11 08:22:45', 1),
(6, 'testing1', 'toys', NULL, 8, 'GzFAp0NxWBFnz1x4EUakWg==', '2023-06-11 12:40:35', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Shops`
--
ALTER TABLE `Shops`
  ADD PRIMARY KEY (`ShopId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
