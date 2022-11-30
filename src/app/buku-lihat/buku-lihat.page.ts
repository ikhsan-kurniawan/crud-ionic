import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Http } from "@capacitor-community/http";

@Component({
  selector: 'app-buku-lihat',
  templateUrl: './buku-lihat.page.html',
  styleUrls: ['./buku-lihat.page.scss'],
})
export class BukuLihatPage implements OnInit {
  id:any;
  judul:any;
  penulis:any;
  penerbit:any;

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
      this.ambilBuku(this.id);
    })
  }

  ngOnInit() {
  }

  ambilBuku(id) {
    this._apiService.ambilBuku(id).subscribe((res: any) => {
      console.log('sukses', res);
      let buku = res;
      this.judul = buku.judul;
      this.penulis = buku.penulis;
      this.penerbit = buku.penerbit;
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data');
    });
    
  }

  deleteBuku(id) {

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
            this._apiService.deleteBuku(id).subscribe((res: any) => {
              console.log("sukses", res);
              this.router.navigateByUrl('/buku');
              // this.getAnggota();
            }, (error: any) => {
              console.log("error", error);
              this.alertController.create({
                header: 'Notifikasi',
                message: 'gagal memuat data buku',
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
