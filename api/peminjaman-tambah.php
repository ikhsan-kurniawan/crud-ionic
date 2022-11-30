<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];
$id_anggota = trim($data['id_anggota']);
$id_buku = trim($data['id_buku']);
$pinjam = trim($data['pinjam']);
$batas = trim($data['batas']);


if ($id_anggota != '' and $id_buku != '' and $pinjam != '' and $batas != '') {
	$query = mysqli_query($koneksi,"insert into peminjaman(id_anggota, id_buku, tanggal_pinjam, batas_pengembalian, status) values('$id_anggota', '$id_buku', '$pinjam', '$batas', 'belum dikembalikan')");
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
