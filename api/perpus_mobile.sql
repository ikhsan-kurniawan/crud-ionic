-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2022 at 10:46 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `perpus_mobile`
--

-- --------------------------------------------------------

--
-- Table structure for table `anggota`
--

CREATE TABLE `anggota` (
  `id_anggota` int(11) NOT NULL,
  `nama_anggota` varchar(200) NOT NULL,
  `nomor_telepon` varchar(200) NOT NULL,
  `alamat` varchar(200) NOT NULL,
  `username` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `status` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `anggota`
--

INSERT INTO `anggota` (`id_anggota`, `nama_anggota`, `nomor_telepon`, `alamat`, `username`, `password`, `status`) VALUES
(11, 'Ammar', '0893483984', 'Purwokerto', '', '', ''),
(12, 'Ikhsan Kur', '084756374657', 'Kebumen', '', '', ''),
(14, 'Wisnu', '085647564736', 'Purwokerto', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `buku`
--

CREATE TABLE `buku` (
  `id_buku` int(11) NOT NULL,
  `judul` varchar(200) NOT NULL,
  `penulis` varchar(200) NOT NULL,
  `penerbit` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `buku`
--

INSERT INTO `buku` (`id_buku`, `judul`, `penulis`, `penerbit`) VALUES
(5, 'judul', 'author', 'penerbit'),
(11, 'laskar pelangi', 'andrea hirata', 'gramedia'),
(12, 'buku coba-cobaa', 'amatiran', 'toska'),
(14, 'Kambing Jantan', 'Raditya Dika', 'Gagasmedia');

-- --------------------------------------------------------

--
-- Table structure for table `peminjaman`
--

CREATE TABLE `peminjaman` (
  `id_peminjaman` int(11) NOT NULL,
  `id_anggota` int(11) NOT NULL,
  `id_buku` int(11) NOT NULL,
  `tanggal_pinjam` varchar(200) NOT NULL,
  `tanggal_kembali` varchar(200) NOT NULL,
  `batas_pengembalian` varchar(200) NOT NULL,
  `status` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `peminjaman`
--

INSERT INTO `peminjaman` (`id_peminjaman`, `id_anggota`, `id_buku`, `tanggal_pinjam`, `tanggal_kembali`, `batas_pengembalian`, `status`) VALUES
(5, 12, 11, '24-11-2022', '27-11-2022', '01-12-2022', 'selesai'),
(6, 11, 12, '24-11-2022', '27-11-2022', '01-12-2022', 'selesai'),
(8, 14, 14, '25-11-2022', '25-11-2022', '02-12-2022', 'selesai');

-- --------------------------------------------------------

--
-- Table structure for table `petugas`
--

CREATE TABLE `petugas` (
  `id_petugas` int(11) NOT NULL,
  `nama_petugas` varchar(200) NOT NULL,
  `nomor_telepon` varchar(200) NOT NULL,
  `alamat` varchar(200) NOT NULL,
  `username` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `status` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `petugas`
--

INSERT INTO `petugas` (`id_petugas`, `nama_petugas`, `nomor_telepon`, `alamat`, `username`, `password`, `status`) VALUES
(1, 'petugas', '085647364517', 'purbalingga', 'petugas', 'afb91ef692fd08c445e8cb1bab2ccf9c', '');

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_peminjaman`
-- (See below for the actual view)
--
CREATE TABLE `v_peminjaman` (
`id_peminjaman` int(11)
,`id_anggota` int(11)
,`id_buku` int(11)
,`tanggal_pinjam` varchar(200)
,`tanggal_kembali` varchar(200)
,`batas_pengembalian` varchar(200)
,`status` varchar(200)
,`nama_anggota` varchar(200)
,`judul` varchar(200)
);

-- --------------------------------------------------------

--
-- Structure for view `v_peminjaman`
--
DROP TABLE IF EXISTS `v_peminjaman`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_peminjaman`  AS SELECT `peminjaman`.`id_peminjaman` AS `id_peminjaman`, `peminjaman`.`id_anggota` AS `id_anggota`, `peminjaman`.`id_buku` AS `id_buku`, `peminjaman`.`tanggal_pinjam` AS `tanggal_pinjam`, `peminjaman`.`tanggal_kembali` AS `tanggal_kembali`, `peminjaman`.`batas_pengembalian` AS `batas_pengembalian`, `peminjaman`.`status` AS `status`, `anggota`.`nama_anggota` AS `nama_anggota`, `buku`.`judul` AS `judul` FROM ((`peminjaman` join `anggota`) join `buku`) WHERE `peminjaman`.`id_anggota` = `anggota`.`id_anggota` AND `peminjaman`.`id_buku` = `buku`.`id_buku` ORDER BY `peminjaman`.`id_peminjaman` ASC ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `anggota`
--
ALTER TABLE `anggota`
  ADD PRIMARY KEY (`id_anggota`);

--
-- Indexes for table `buku`
--
ALTER TABLE `buku`
  ADD PRIMARY KEY (`id_buku`);

--
-- Indexes for table `peminjaman`
--
ALTER TABLE `peminjaman`
  ADD PRIMARY KEY (`id_peminjaman`),
  ADD KEY `id_anggota` (`id_anggota`,`id_buku`),
  ADD KEY `id_buku` (`id_buku`);

--
-- Indexes for table `petugas`
--
ALTER TABLE `petugas`
  ADD PRIMARY KEY (`id_petugas`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `anggota`
--
ALTER TABLE `anggota`
  MODIFY `id_anggota` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `buku`
--
ALTER TABLE `buku`
  MODIFY `id_buku` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `peminjaman`
--
ALTER TABLE `peminjaman`
  MODIFY `id_peminjaman` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `petugas`
--
ALTER TABLE `petugas`
  MODIFY `id_petugas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `peminjaman`
--
ALTER TABLE `peminjaman`
  ADD CONSTRAINT `peminjaman_ibfk_2` FOREIGN KEY (`id_anggota`) REFERENCES `anggota` (`id_anggota`) ON UPDATE CASCADE,
  ADD CONSTRAINT `peminjaman_ibfk_3` FOREIGN KEY (`id_buku`) REFERENCES `buku` (`id_buku`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
