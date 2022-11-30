<?php
require 'koneksi.php';
$data = [];
$query = mysqli_query($koneksi,"select * from buku");
while ($row = mysqli_fetch_object($query)) {
	// $row->cover = base64_encode($row->sampul);
	// $row->sampul = base64_encode($row->sampul);
	$data[] = $row;
}
//tampilkan data dalam bentuk json
echo json_encode($data);
echo mysqli_error($koneksi);

?>
