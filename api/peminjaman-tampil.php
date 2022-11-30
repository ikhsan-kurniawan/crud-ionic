<?php
require 'koneksi.php';
$data = [];
$query = mysqli_query($koneksi,"select * from v_peminjaman order by id_peminjaman desc");
while ($row = mysqli_fetch_object($query)) {
	$data[] = $row;
}
//tampilkan data dalam bentuk json
echo json_encode($data);
echo mysqli_error($koneksi);

?>
