-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 16, 2024 at 03:48 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cuet_alumni`
--

-- --------------------------------------------------------

--
-- Table structure for table `alumni`
--

CREATE TABLE `alumni` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `date_of_birth` date NOT NULL,
  `blood_group` varchar(5) NOT NULL,
  `department` varchar(255) NOT NULL,
  `batch` varchar(10) NOT NULL,
  `present_position` varchar(255) NOT NULL,
  `organization` varchar(255) NOT NULL,
  `present_address` varchar(255) NOT NULL,
  `phone_no` varchar(15) NOT NULL,
  `email` varchar(255) NOT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `linkedIn_profile_link` varchar(255) DEFAULT NULL,
  `recent_degree` varchar(100) DEFAULT NULL,
  `university_name` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alumni`
--

INSERT INTO `alumni` (`id`, `name`, `date_of_birth`, `blood_group`, `department`, `batch`, `present_position`, `organization`, `present_address`, `phone_no`, `email`, `gender`, `linkedIn_profile_link`, `recent_degree`, `university_name`, `password`) VALUES
(32, 'Tanjum Motin Mitul', '2000-02-17', 'B+', 'CSE', '2018', 'Software Engineer', 'ABC company', 'Mirpur 12, Dhaka', '01741806664', 'tanjummotin@gmail.com', 'Female', 'https://www.linkedin.com/in/tanjum-motin-mitul-602a1b19a/', 'Msc', 'CUET', NULL),
(33, 'Zannatul Fardaus', '2000-02-10', 'B+', 'CSE', '2018', 'Software Engineer', 'Softonic Int.', 'Dhanmondi, Dhaka', '01742451999', 'zannatul@gmail.com', 'Female', 'https://www.linkedin.com/in/zannatul-fardaush-tripty-8481241b2/', 'Msc', 'CUET', NULL),
(34, 'Nidita Roy', '2000-02-23', 'O+', 'CSE', '2018', 'ML Engineer', 'Dream71 Ltd', 'Dhanmondi, Dhaka', '01642451999', 'nidita.roy@gmail.com', 'Female', 'https://www.linkedin.com/in/nidita-roy-0537b31b0/', 'Msc', 'CUET', NULL),
(35, 'Moshiur Rahman', '1997-11-23', 'O+', 'CSE', '2013', 'Lecturer', 'Green University', 'Dhanmondi, Dhaka', '016882451999', 'rahman199@gmail.com', 'male', 'https://www.linkedin.com/in/nidita-roy-0537b31b0/', 'Msc', 'CUET', NULL),
(36, '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', NULL),
(37, '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', NULL),
(38, '', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', NULL),
(39, 'Tanjum Motin', '2024-01-29', 'B+', 'CSE', '2018', 'Software Engineer', 'xyz comp', 'Feni Sadar Hospital, Railing road', '01741806664', 'tanjummotin@gmail.com', 'Female', 'https://www.linkedin.com/in/nidita-roy-0537b31b0/', 'Msc', 'CUET', 'xyz'),
(40, 'ee', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(41, 'Iftekhar rahim', '2024-03-15', '', 'EEE', '2012', 'Product Manager', 'Brainstation Limited', 'Dhaka', '01883200591', 'test@gmail.com', 'male', '', 'Msc', 'BUET', 'abc123'),
(42, 'Musfiq Motin', '2024-03-08', 'O+', 'CSE', '2010', 'Product Manager', 'Dynamic Solution Innovators', 'Dhaka', '01645124234', 'test1@gmail.com', 'male', '', 'Phd', 'BUET', 'asdf'),
(43, 'Zahedur Rahman', '2024-03-02', 'AB+', 'CSE', '2009', 'ML Engineer', 'TigerIT Limited', 'Dhaka', '01883200591', 'test3@gmail.com', 'male', '', '', '', 'qwert');

-- --------------------------------------------------------

--
-- Table structure for table `event_info`
--

CREATE TABLE `event_info` (
  `event_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `type` varchar(50) NOT NULL,
  `online_or_in_person` varchar(20) NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `event_description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `event_info`
--

INSERT INTO `event_info` (`event_id`, `title`, `date`, `time`, `type`, `online_or_in_person`, `location`, `event_description`) VALUES
(2, 'Tech Talk Series: Innovation Insights', '2024-02-08', '10:00:00', 'Career', 'In person', 'Auditoriam', 'Get insights about your carrer'),
(3, 'Tech Conference 2024', '2024-05-15', '09:00:00', 'Conference', 'In-person', 'Convention Center, Cityville', 'Join us for the largest tech conference of the year! Explore the latest trends, attend workshops, and network with industry professionals.'),
(4, 'Blockchain', '2024-01-29', '19:49:00', 'social', 'online', 'cuet', ''),
(5, 'SoftRobotics Recruitment Exam', '2024-02-15', '11:00:00', 'Career', 'In person', '4th floor,Academic Building-3,CUET', 'Written exam for SoftRobotics Junior Software Engineer recruitment');

-- --------------------------------------------------------

--
-- Table structure for table `search_info`
--

CREATE TABLE `search_info` (
  `search_id` int(11) NOT NULL,
  `search_by` varchar(255) DEFAULT NULL,
  `search_value` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `search_info`
--

INSERT INTO `search_info` (`search_id`, `search_by`, `search_value`) VALUES
(37, 'present_position', 'Software Engineer'),
(38, 'present_position', 'Software Engineer'),
(39, 'present_position', 'Software Engineer'),
(40, 'present_position', 'Software Engineer'),
(41, 'present_position', 'Software Engineer'),
(42, 'present_position', 'Software Engineer'),
(43, 'present_position', 'Software Engineer'),
(44, 'present_position', 'Software Engineer'),
(45, 'present_position', 'Software Engineer'),
(46, 'present_position', 'Software Engineer'),
(47, 'present_position', 'Software Engineer'),
(48, 'organization', 'ABC company'),
(49, 'name', 'Nidita Roy'),
(50, 'name', 'Nidita Roy'),
(51, 'organization', 'ABC company');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alumni`
--
ALTER TABLE `alumni`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `event_info`
--
ALTER TABLE `event_info`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `search_info`
--
ALTER TABLE `search_info`
  ADD PRIMARY KEY (`search_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alumni`
--
ALTER TABLE `alumni`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `event_info`
--
ALTER TABLE `event_info`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `search_info`
--
ALTER TABLE `search_info`
  MODIFY `search_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
