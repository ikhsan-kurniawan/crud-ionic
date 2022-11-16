<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$pesan = [];
$id = $data['id'];
$nama = $data['nama'];
$telepon = $data['telepon'];
$alamat = $data['alamat'];

$query = mysqli_query($koneksi,"update anggota set nama_anggota='$nama', nomor_telepon='$telepon', alamat='$alamat' where id_anggota='$id'");
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
