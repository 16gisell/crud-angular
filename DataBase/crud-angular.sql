-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-08-2021 a las 06:31:14
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crud-angular`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivos`
--

CREATE TABLE `archivos` (
  `id_files` int(10) NOT NULL,
  `nameFile` varchar(250) NOT NULL,
  `typeFile` varchar(50) NOT NULL,
  `description` varchar(250) NOT NULL,
  `codeFile` varchar(20) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `archivos`
--

INSERT INTO `archivos` (`id_files`, `nameFile`, `typeFile`, `description`, `codeFile`, `date`) VALUES
(6, 'el secreto', 'Novela', 'novela de reflexión2', '20s5-550', '2021-08-14 02:37:32');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_users` int(10) NOT NULL,
  `name` varchar(250) NOT NULL,
  `lastname` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(20) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_users`, `name`, `lastname`, `email`, `password`, `date`) VALUES
(1, 'LUCAS', 'HERNANDEZ', 'LUCAS@L.COM', '123456', '2021-08-10 05:52:18'),
(2, 'yiyo', 'Rodriguez', 'yiyo@gmail.com', '12345678', '2021-08-12 22:30:53'),
(3, 'nfg', 'fghfg', 'gihf@hf.nc', '123555555', '2021-08-12 23:59:31'),
(5, 'jfksdf', 'fsdd', 'gi@jkd.ck', '123456789', '2021-08-13 00:15:47'),
(11, 'yiyo', 'Williams', 'fhg@hgd.cm', '233444556', '2021-08-13 00:22:12'),
(15, 'yiyo', 'Rodriguez', 'po@ggmail.com', '123232323', '2021-08-13 00:30:00'),
(16, 'marta', 'gfdgdf', 'po7@ggmail.com', '12345678988554', '2021-08-13 00:31:05'),
(22, 'marta', 'hgh', 'po88@ggmail.com', '123456789', '2021-08-13 00:42:45'),
(25, 'marta', 'RODRIGUEZ', 'po8800@ggmail.com', '123456789', '2021-08-13 00:58:03'),
(26, 'marta', 'RODRIGUEZ', 'po880960@ggmail.com', '123456789', '2021-08-13 00:58:29'),
(27, 'jkh', 'Williams', 'kjsdjkj@jkdfhnjkd.djn', '12345555', '2021-08-13 00:58:50'),
(28, 'dss', 'dsfsd', 'fdsf@jhfds.cj', '123333333', '2021-08-13 00:59:35'),
(34, 'yiyo', 'fgd', 'yiyo@gmail.com', '12345678', '2021-08-13 20:48:02'),
(35, 'yiyo', 'fgd', 'yiyo123456@gmail.com', '12345678', '2021-08-13 20:50:36'),
(36, 'gisell', 'sfsd', 'jexell_16@hotmail.com', '12345678', '2021-08-13 21:02:36'),
(37, 'tuern', 'RODRIGUEZ', 'hf@hdhd.d', '12345678', '2021-08-13 21:12:17');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `archivos`
--
ALTER TABLE `archivos`
  ADD PRIMARY KEY (`id_files`),
  ADD UNIQUE KEY `codeFile` (`codeFile`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_users`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `archivos`
--
ALTER TABLE `archivos`
  MODIFY `id_files` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_users` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
