import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Http } from "@capacitor-community/http";

@Component({
  selector: 'app-anggota-edit',
  templateUrl: './anggota-edit.page.html',
  styleUrls: ['./anggota-edit.page.scss'],
})
export class AnggotaEditPage implements OnInit {
  id:any;
  nama:any;
  telepon:any;
  alamat:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public LoadingController: LoadingController,
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.ambilAnggota(this.id);
    })
  }

  ngOnInit() {
  }

  ambilAnggota(id) {
    this._apiService.ambilAnggota(id).subscribe((res: any) => {
      console.log('sukses', res);
      let anggota = res;
      //console.log(mahasiswa);
      this.nama = anggota.nama_anggota;
      this.telepon = anggota.nomor_telepon;
      this.alamat = anggota.alamat;
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data');
    });
    
    
  }
  
  
  editAnggota() {
    console.log(this.alamat);
    let url = this._apiService.apiURL() + "/anggota-edit.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        id: this.id,
        nama: this.nama,
        telepon: this.telepon,
        alamat: this.alamat,
      },
    }).then((data) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Edit Data Anggota',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/anggota');
    }, (err) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Edit Data Anggota',
        buttons: ['OK']
      }).then(res => {
        res.present()
      });
    })
  }

}
