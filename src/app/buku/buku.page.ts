import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-buku',
  templateUrl: './buku.page.html',
  styleUrls: ['./buku.page.scss'],
})
export class BukuPage implements OnInit {
  id: any;
  judul: any;
  penulis: any;
  penerbit: any;
  // sampul: any;
  buku: any[];
  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
  ) {
    this.getBuku();
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getBuku();
  }

  getBuku(){
    this._apiService.getBuku().subscribe((res:any)=>{
      console.log("sukses", res);
      this.buku = res;
    }, (error:any)=>{
      console.log("gagal", error);
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal memuat data buku',
        buttons: ['OK']
      }).then(res => {
        res.present();
      })
    });
  }

}
