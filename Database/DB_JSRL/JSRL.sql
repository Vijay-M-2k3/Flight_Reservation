-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 18, 2023 at 09:12 AM
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

-- --------------------------------------------------------

--
-- Table structure for table `Countries`
--

CREATE TABLE `Countries` (
  `CountryId` int(5) NOT NULL,
  `CountryName` varchar(50) DEFAULT NULL,
  `CountryCode` int(5) DEFAULT NULL,
  `CountryImage` varchar(10) DEFAULT NULL,
  `Alpha2` varchar(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Countries`
--

INSERT INTO `Countries` (`CountryId`, `CountryName`, `CountryCode`, `CountryImage`, `Alpha2`) VALUES
(1, 'India', 91, 'in.svg', 'IN'),
(2, 'United States', 1, 'us.svg', 'US');

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
-- Dumping data for table `ExceptionLog`
--

INSERT INTO `ExceptionLog` (`ExceptionLogId`, `UserId`, `Message`, `MethodName`, `ControllerName`, `ExceptionOn`, `ExceptionDate`) VALUES
(1, 1, 'Unknown column \'x.IsActive\' in \'where clause\'', 'GetCustomerDetails(Get)', 'CustomersController', 'Line: 157', '2023-06-18 11:55:10');

-- --------------------------------------------------------

--
-- Table structure for table `Master_Status`
--

CREATE TABLE `Master_Status` (
  `StatusId` int(5) NOT NULL,
  `Status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Master_Status`
--

INSERT INTO `Master_Status` (`StatusId`, `Status`) VALUES
(1, 'Active'),
(2, 'Deleted'),
(3, 'Temporarily Inactive');

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

-- --------------------------------------------------------

--
-- Table structure for table `UserTypes`
--

CREATE TABLE `UserTypes` (
  `UserTypeId` int(5) NOT NULL,
  `UserType` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `UserTypes`
--

INSERT INTO `UserTypes` (`UserTypeId`, `UserType`) VALUES
(1, 'ShopOwner'),
(2, 'Customer'),
(3, 'SuperAdmin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Address`
--
ALTER TABLE `Address`
  ADD PRIMARY KEY (`AddressId`);

--
-- Indexes for table `Countries`
--
ALTER TABLE `Countries`
  ADD PRIMARY KEY (`CountryId`);

--
-- Indexes for table `ExceptionLog`
--
ALTER TABLE `ExceptionLog`
  ADD PRIMARY KEY (`ExceptionLogId`);

--
-- Indexes for table `Master_Status`
--
ALTER TABLE `Master_Status`
  ADD PRIMARY KEY (`StatusId`);

--
-- Indexes for table `Shops`
--
ALTER TABLE `Shops`
  ADD PRIMARY KEY (`ShopId`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`UserId`);

--
-- Indexes for table `UserTypes`
--
ALTER TABLE `UserTypes`
  ADD PRIMARY KEY (`UserTypeId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
