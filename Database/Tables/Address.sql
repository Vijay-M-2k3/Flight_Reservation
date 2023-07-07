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
-- Table structure for table `Address`
--

CREATE TABLE `Address` (
  `AddressId` int(5) NOT NULL,
  `DoorNo` varchar(100) DEFAULT NULL,
  `Street` varchar(100) DEFAULT NULL,
  `Locality` varchar(100) DEFAULT NULL,
  `City` varchar(100) DEFAULT NULL,
  `PinCode` varchar(100) DEFAULT NULL,
  `State` varchar(100) DEFAULT NULL,
  `CountryId` int(5) DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `IsActive` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Address`
--

INSERT INTO `Address` (`AddressId`, `DoorNo`, `Street`, `Locality`, `City`, `PinCode`, `State`, `CountryId`, `CreatedOn`, `IsActive`) VALUES
(1, 'SeJ+FlRY7rtnC25wpdlufA==', 'UplXr8Gc+pRo9wX2eVuuS3At/g3HPrHqNGIbzi/AWkk=', 'Uc6jt7ovRC8/mX0L5dxeag==', 'ZI+KrpqmB4agFIVSiXkFAg==', 'OnUXOq6cXqHf6p+s3vDPAg==', 'MTAzG7ZJrNE6ChtExBwOLQ==', 1, '2023-06-10 19:51:13', b'1'),
(2, '18gu5dI4ftKQyl/6o5hpBA==', 'Yu4aHaRsm5MjwqTpn0lqiTWDnY8z5ye16NPv/zJoFOMjL0xATMA0+r7MuZW+LjHL', 'Uc6jt7ovRC8/mX0L5dxeag==', 'ZI+KrpqmB4agFIVSiXkFAg==', 'OnUXOq6cXqHf6p+s3vDPAg==', 'MTAzG7ZJrNE6ChtExBwOLQ==', 1, '2023-06-10 20:08:14', b'1'),
(3, 'e5jFZhfmph518xa3f/8kug==', 'n+oXKurZxHIQbGUlf6mvfurqRQMoZCvPMsX1AnuC0Ic=', 'yEMU58OQLqqCi9UrYwb8dg==', 'ZI+KrpqmB4agFIVSiXkFAg==', 'GoM0QNM0VX0BFZ8wifGRUA==', 'MTAzG7ZJrNE6ChtExBwOLQ==', 1, '2023-06-11 08:11:30', b'1'),
(4, 'wY/Jv0Hvb2+gFa+7Xk77+A==', 'aRBlw3qG0i0QEpakLivj2Q==', NULL, 'irWjTJhnw2TgR2h1wYzngw==', 'EYftIV3NnQaIAh+nMBNw+g==', 'jBt9hcU23bK2A3keIrd8rQ==', 2, '2023-06-11 08:22:45', b'1'),
(6, 'BerhgkvUELlLrE7zr0XO2g==', '2Hk1hSCOZw1ZvWhOtY46/sjaIYlQ/ngj7W83N2Y4NsY=', 'r3GbyM8p3SH1jBfpX2hMBA==', 'ZI+KrpqmB4agFIVSiXkFAg==', '2OscSB4B7ZyNsPdXCGcqLQ==', 'MTAzG7ZJrNE6ChtExBwOLQ==', 1, '2023-06-11 12:29:55', b'1'),
(7, 'kdmicsUGWJPhyXnZqLuaFQ==', 'Yu4aHaRsm5MjwqTpn0lqiTWDnY8z5ye16NPv/zJoFOMjL0xATMA0+r7MuZW+LjHL', 'Uc6jt7ovRC8/mX0L5dxeag==', 'ZI+KrpqmB4agFIVSiXkFAg==', 'OnUXOq6cXqHf6p+s3vDPAg==', 'MTAzG7ZJrNE6ChtExBwOLQ==', 1, '2023-06-11 12:36:42', b'1'),
(8, 'kdmicsUGWJPhyXnZqLuaFQ==', 'vCokJRtcjlwyN16jILn7iQ==', 'r3GbyM8p3SH1jBfpX2hMBA==', 'ZI+KrpqmB4agFIVSiXkFAg==', '2OscSB4B7ZyNsPdXCGcqLQ==', 'MTAzG7ZJrNE6ChtExBwOLQ==', 1, '2023-06-11 12:40:35', b'1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Address`
--
ALTER TABLE `Address`
  ADD PRIMARY KEY (`AddressId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
