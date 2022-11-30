import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
  ) { }

  // link api
  apiURL(){
    return "http://localhost/perpusmobile/api";
  }

  getAnggota() {
    return this.http.get(this.apiURL() + '/anggota-tampil.php');
  }

  deleteAnggota(id) {
    return this.http.delete(this.apiURL() + '/anggota-hapus.php?id=' + id);
  }

  ambilAnggota(id) {
    return this.http.get(this.apiURL() + '/anggota-lihat.php?id=' + id);
  }

  getBuku() {
    return this.http.get(this.apiURL() + '/buku-tampil.php');
  }

  deleteBuku(id) {
    return this.http.delete(this.apiURL() + '/buku-hapus.php?id=' + id);
  }

  ambilBuku(id) {
    return this.http.get(this.apiURL() + '/buku-lihat.php?id=' + id);
  }

  getPeminjaman() {
    return this.http.get(this.apiURL() + '/peminjaman-tampil.php');
  }

  ambilPeminjaman(id) {
    return this.http.get(this.apiURL() + '/peminjaman-lihat.php?id=' + id);
  }
}
