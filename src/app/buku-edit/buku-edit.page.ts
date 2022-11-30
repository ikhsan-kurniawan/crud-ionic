import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Http } from "@capacitor-community/http";

@Component({
  selector: 'app-buku-edit',
  templateUrl: './buku-edit.page.html',
  styleUrls: ['./buku-edit.page.scss'],
})
export class BukuEditPage implements OnInit {
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
      let anggota = res;
      //console.log(mahasiswa);
      this.judul = anggota.judul;
      this.penulis = anggota.penulis;
      this.penerbit = anggota.penerbit;
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data');
    });
  }

  editBuku() {
    let url = this._apiService.apiURL() + "/buku-edit.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        id: this.id,
        judul: this.judul,
        penulis: this.penulis,
        penerbit: this.penerbit,
      },
    }).then((data) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Edit Data Buku',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/buku');
    }, (err) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Edit Data Buku',
        buttons: ['OK']
      }).then(res => {
        res.present()
      });
    })
  }

}
