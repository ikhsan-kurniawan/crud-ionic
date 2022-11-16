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

}
