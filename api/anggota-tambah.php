<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];
$nama = trim($data['nama']);
$telepon = trim($data['telepon']);
$alamat = trim($data['alamat']);

if ($telepon != '' and $nama != '' and $alamat != '') {
	$query = mysqli_query($koneksi,"insert into anggota(nama_anggota, nomor_telepon, alamat) values('$nama', '$telepon', '$alamat')");

}else{
	// $query = mysqli_query($koneksi,"delete from anggota where id_anggota='$id'");
}


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
