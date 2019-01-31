-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3064
-- Generation Time: Jan 29, 2019 at 07:28 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `skynet-data`
--

-- --------------------------------------------------------

--
-- Table structure for table `android`
--

CREATE TABLE `android` (
  `sn_primary` bigint(20) UNSIGNED NOT NULL,
  `sn_andriod_name` varchar(100) NOT NULL,
  `sn_andriod_type` varchar(100) NOT NULL,
  `sn_tasks_completed` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `android`
--

INSERT INTO `android` (`sn_primary`, `sn_andriod_name`, `sn_andriod_type`, `sn_tasks_completed`) VALUES
(1, 'Tommy Bot', 'Arachnid', NULL),
(2, 'a_params', 'b_params', 3),
(3, 'Billy', 'Arachnid', 3),
(4, 'terminator', 'Arachnid', 2),
(5, 'terminator', 'Arachnid', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `android`
--
ALTER TABLE `android`
  ADD PRIMARY KEY (`sn_primary`),
  ADD UNIQUE KEY `sky_primary` (`sn_primary`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `android`
--
ALTER TABLE `android`
  MODIFY `sn_primary` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
