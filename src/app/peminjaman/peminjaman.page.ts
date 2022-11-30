import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-peminjaman',
  templateUrl: './peminjaman.page.html',
  styleUrls: ['./peminjaman.page.scss'],
})
export class PeminjamanPage implements OnInit {
  id: any;
  anggota: any;
  buku: any;

  peminjaman: any[];


  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
  ) {
    this.getPeminjaman();
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getPeminjaman();
  }

  getPeminjaman(){
    this._apiService.getPeminjaman().subscribe((res:any)=>{
      console.log("sukses", res);
      this.peminjaman = res;
    }, (error:any)=>{
      console.log("gagal", error);
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal memuat data peminjaman',
        buttons: ['OK']
      }).then(res => {
        res.present();
      })
    });
  }

}
