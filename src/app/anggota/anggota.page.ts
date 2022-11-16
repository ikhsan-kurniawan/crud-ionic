import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-anggota',
  templateUrl: './anggota.page.html',
  styleUrls: ['./anggota.page.scss'],
})
export class AnggotaPage {
  id: any;
  nama: any;
  telepon: any;
  alamat: any;
  anggota: any[];
  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
  ) {
    this.getAnggota();
  }

  ngOnInit() {
    console.log('cek fungsi halaman event ini jalan');
  }

  ionViewDidEnter(){
    console.log('jika selesai loading');
    this.getAnggota();
  }

  getAnggota(){
    this._apiService.getAnggota().subscribe((res:any)=>{
      console.log("sukses", res);
      this.anggota = res;
    }, (error:any)=>{
      console.log("gagal", error);
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal memuat data mahasiswa',
        buttons: ['OK']
      }).then(res => {
        res.present();
      })
    });
  }

  deleteAnggota(id) {

    this.alertController.create({
      header: 'perhatian',
      subHeader: 'Yakin menghapus data ini?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('dibatalkan', data);
          }
        },
        {
          text: 'Yakin',
          handler: (data: any) => {
            //jika tekan yakin
            this._apiService.deleteAnggota(id).subscribe((res: any) => {
              console.log("sukses", res);
              this.getAnggota();
            }, (error: any) => {
              console.log("error", error);
              this.alertController.create({
                header: 'Notifikasi',
                message: 'gagal memuat data mahasiswa',
                buttons: ['OK']
              }).then(res => {
                res.present();
              })
            })
          }
        }
      ]
    }).then(res => {
      res.present();
    })
  }

}
