import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Http } from "@capacitor-community/http";

@Component({
  selector: 'app-anggota-tambah',
  templateUrl: './anggota-tambah.page.html',
  styleUrls: ['./anggota-tambah.page.scss'],
})
export class AnggotaTambahPage implements OnInit {
  nama:any;
  telepon:any;
  alamat:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
  ) { }

  ngOnInit() {
  }

  addAnggota() {
    let url = this._apiService.apiURL() + "/anggota-tambah.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json"},
      data: {
        telepon: this.telepon,
        nama: this.nama,
        alamat: this.alamat
      },
    }).then((data) => {
      this.telepon = '';
      this.nama = '';
      this.alamat = '';
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Input data Anggota',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/anggota');
    }, (error) => {
      console.log(error);
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Input data Anggota',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
    })
  }

}
