<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$pesan = [];
$id = $data['id'];
$kembali = $data['kembali'];
$status = $data['status'];

$query = mysqli_query($koneksi,"update peminjaman set tanggal_kembali='$kembali', status='$status' where id_peminjaman='$id'");
// if ($query) {
// 	http_response_code(201);
// 	$pesan['status'] = 'sukses';
// }else{
// 	http_response_code(422);
// 	$pesan['status'] = 'gagal';

// }

echo json_encode($pesan);
echo mysqli_error($koneksi);


?>
