<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$pesan = [];
$id = $data['id'];
$judul = $data['judul'];
$penulis = $data['penulis'];
$penerbit = $data['penerbit'];

$query = mysqli_query($koneksi,"update buku set judul='$judul', penulis='$penulis', penerbit='$penerbit' where id_buku='$id'");
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
