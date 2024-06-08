-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 08, 2024 at 04:43 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_eccomerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `category_products`
--

CREATE TABLE `category_products` (
  `id_category` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `nama_category` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` enum('0','1') NOT NULL DEFAULT '1',
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category_products`
--

INSERT INTO `category_products` (`id_category`, `id_user`, `nama_category`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 3, 'Makanan', '1', '2024-06-06', '2024-06-06');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id_orders` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `no_orders` varchar(50) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total_harga` double(10,2) NOT NULL,
  `status` enum('0','1') NOT NULL DEFAULT '1',
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id_orders`, `id_user`, `id_product`, `no_orders`, `quantity`, `total_harga`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 3, 1, '44001b67-dd63-48dc-b1be-12de6f6fc92c', 1, 6000.00, '0', '2024-06-06', '2024-06-06'),
(2, 3, 1, '44001b67-dd63-48dc-b1be-12de6f6fc92c', 1, 6000.00, '0', '2024-06-06', '2024-06-06'),
(3, 3, 1, '32a649f4-9972-4272-aec9-13a9dcfee5a8', 1, 6000.00, '0', '2024-06-06', '2024-06-06'),
(4, 3, 1, '32a649f4-9972-4272-aec9-13a9dcfee5a8', 1, 6000.00, '0', '2024-06-06', '2024-06-06'),
(5, 3, 1, 'fb3d4731-740f-4394-8ed7-35515ad7b571', 0, 6000.00, '1', '2024-06-06', '2024-06-06'),
(6, 3, 1, 'fb3d4731-740f-4394-8ed7-35515ad7b571', 0, 6000.00, '1', '2024-06-06', '2024-06-06');

-- --------------------------------------------------------

--
-- Table structure for table `order_histories`
--

CREATE TABLE `order_histories` (
  `no_orders` varchar(50) NOT NULL,
  `total_payment` double(10,2) NOT NULL,
  `status` enum('0','1') NOT NULL DEFAULT '1',
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_histories`
--

INSERT INTO `order_histories` (`no_orders`, `total_payment`, `status`, `createdAt`, `updatedAt`) VALUES
('fb3d4731-740f-4394-8ed7-35515ad7b571', 12000.00, '1', '2024-06-06', '2024-06-06');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id_product` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_category` int(11) NOT NULL,
  `nama_product` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `filename_image` text NOT NULL,
  `path_image` text NOT NULL,
  `harga` double(10,2) NOT NULL,
  `is_kupon` enum('0','1') NOT NULL,
  `status` enum('0','1') NOT NULL DEFAULT '1',
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id_product`, `id_user`, `id_category`, `nama_product`, `filename_image`, `path_image`, `harga`, `is_kupon`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 3, 1, 'Mie China', 'ef9844123dbaed54d4f62d3770600dc0.png', 'http://localhost:8282/images/ef9844123dbaed54d4f62d3770600dc0.png', 500000.00, '1', '1', '2024-06-06', '2024-06-06'),
(2, 3, 1, 'Pizza', '130adb8b7b0bb18e90d13b213a4f8c16.png', 'http://localhost:8282/images/130adb8b7b0bb18e90d13b213a4f8c16.png', 600000.00, '1', '1', '2024-06-08', '2024-06-08');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `firstname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `lastname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `username` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` text NOT NULL,
  `address` text NOT NULL,
  `role` enum('1','2') NOT NULL DEFAULT '2' COMMENT '1 = adalah admin, 2 = adalah user',
  `status` enum('0','1') NOT NULL DEFAULT '1' COMMENT '0 = status non active,\r\n1 = status active',
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `firstname`, `lastname`, `username`, `email`, `password`, `address`, `role`, `status`, `createdAt`, `updatedAt`) VALUES
(3, 'iskandars', 'zulkarnains', 'iskandar', 'iskandar@gmail.com', '$2a$10$1FdNUb7CQT2/baia0QMWc.030K.6wVKLusmEXYii5dWX/sQNBA/h2', 'JL.Damai Rt.09/05', '2', '1', '2024-06-06', '2024-06-06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category_products`
--
ALTER TABLE `category_products`
  ADD PRIMARY KEY (`id_category`),
  ADD UNIQUE KEY `nama_category` (`nama_category`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id_orders`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_product` (`id_product`),
  ADD KEY `no_orders` (`no_orders`);

--
-- Indexes for table `order_histories`
--
ALTER TABLE `order_histories`
  ADD PRIMARY KEY (`no_orders`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_product`),
  ADD UNIQUE KEY `nama_product` (`nama_product`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_category` (`id_category`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `user_name` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `role` (`role`),
  ADD KEY `status` (`status`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category_products`
--
ALTER TABLE `category_products`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id_orders` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
