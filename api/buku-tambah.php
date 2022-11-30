<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];
$judul = trim($data['judul']);
$penulis = trim($data['penulis']);
$penerbit = trim($data['penerbit']);
// $sampul = addslashes(file_get_contents($_FILES['sampul']['tmp_name']));

if ($judul != '' and $penulis != '' and $penerbit != '') {
	$query = mysqli_query($koneksi,"insert into buku(judul, penulis, penerbit) values('$judul', '$penulis', '$penerbit')");

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
