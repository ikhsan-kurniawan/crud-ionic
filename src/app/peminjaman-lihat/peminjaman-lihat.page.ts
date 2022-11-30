import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Http } from "@capacitor-community/http";
import { format, parseISO } from 'date-fns';


@Component({
  selector: 'app-peminjaman-lihat',
  templateUrl: './peminjaman-lihat.page.html',
  styleUrls: ['./peminjaman-lihat.page.scss'],
})
export class PeminjamanLihatPage implements OnInit {
  id:any;
  anggota:any;
  buku:any;
  pinjam:any;
  batas:any;
  kembali:any;
  status:any;
  isDone:any;

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
      this.ambilPeminjaman(this.id);
    })
    
  }
  
  ngOnInit() {
  }

  ambilPeminjaman(id) {
    this._apiService.ambilPeminjaman(id).subscribe((res: any) => {
      console.log('sukses', res);
      let peminjaman = res;
      this.anggota = peminjaman.nama_anggota;
      this.buku = peminjaman.judul;
      this.pinjam = peminjaman.tanggal_pinjam;
      this.batas = peminjaman.batas_pengembalian;
      this.kembali = peminjaman.tanggal_kembali;
      this.status = peminjaman.status;
      if (this.status == "selesai") {
        this.isDone = true;
      }else{
        this.isDone = false;
      }
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data');
    });
  }

  updatePeminjaman(id){
    this.alertController.create({
      header: 'PERHATIAN',
      subHeader: 'Yakin untuk menyelesaikan peminjaman ini?',
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
            let url = this._apiService.apiURL() + "/peminjaman-edit.php";
            let now = new Date().toISOString();
            let kembali_baru = format(parseISO(now), 'dd-M-yyyy');
            let status_baru = 'selesai';
            Http.request({
              method: "POST",
              url: url,
              headers: { "Content-Type": "application/json" },
              data: {
                id: this.id,
                kembali: kembali_baru,
                status: status_baru,
              },
            }).then((data) => {
              this.alertController.create({
                header: 'Notifikasi',
                message: 'Berhasil Menyelesaikan Peminjaman',
                buttons: ['OK'],
              }).then(res => {
                res.present();
              });
              this.router.navigateByUrl('/peminjaman');
            }, (err) => {
              this.alertController.create({
                header: 'Notifikasi',
                message: 'Gagal Menyelesaikan Peminjaman',
                buttons: ['OK']
              }).then(res => {
                res.present()
              });
            })
          }
        }
      ]
    }).then(res => {
      res.present();
    })
  }

}
