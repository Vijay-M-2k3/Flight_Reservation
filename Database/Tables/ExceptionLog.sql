-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 18, 2023 at 07:18 AM
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
-- Table structure for table `ExceptionLog`
--

CREATE TABLE `ExceptionLog` (
  `ExceptionLogId` int(5) NOT NULL,
  `UserId` int(5) DEFAULT NULL,
  `Message` varchar(255) DEFAULT NULL,
  `MethodName` varchar(64) DEFAULT NULL,
  `ControllerName` varchar(50) DEFAULT NULL,
  `ExceptionOn` varchar(12) DEFAULT NULL,
  `ExceptionDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ExceptionLog`
--
ALTER TABLE `ExceptionLog`
  ADD PRIMARY KEY (`ExceptionLogId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
