import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Http } from "@capacitor-community/http";

@Component({
  selector: 'app-buku-tambah',
  templateUrl: './buku-tambah.page.html',
  styleUrls: ['./buku-tambah.page.scss'],
})
export class BukuTambahPage implements OnInit {
  judul:any;
  penulis:any;
  penerbit:any;
  // sampul:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
  ) { }

  ngOnInit() {
  }

  addBuku() {
    let url = this._apiService.apiURL() + "/buku-tambah.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json"},
      data: {
        judul: this.judul,
        penulis: this.penulis,
        penerbit: this.penerbit,
      },
    }).then((data) => {
      this.judul = '';
      this.penulis = '';
      this.penerbit = '';
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Input data Buku',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/buku');
    }, (error) => {      
      console.log(error);
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Input data Buku',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
    })
  }

}
