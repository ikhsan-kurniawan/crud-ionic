import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Http } from "@capacitor-community/http";
import { format, parseISO, addDays } from 'date-fns';

@Component({
  selector: 'app-peminjaman-tambah',
  templateUrl: './peminjaman-tambah.page.html',
  styleUrls: ['./peminjaman-tambah.page.scss'],
})
export class PeminjamanTambahPage implements OnInit {
  // get variabel
  anggota: any[];
  buku: any[];

  // post variabel
  id_anggota:any;
  id_buku:any;
  pinjam:any;
  batas:any;
  status:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
  ) {
    this.getAnggota();
    this.getBuku();
    this.pinjam =  new Date().toISOString();
  }

  ngOnInit() {
  }

  getAnggota(){
    this._apiService.getAnggota().subscribe((res:any)=>{
      console.log("sukses", res);
      this.anggota = res;
    }, (error:any)=>{
      console.log("gagal", error);
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal memuat data anggota',
        buttons: ['OK']
      }).then(res => {
        res.present();
      })
    });
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

  addPeminjaman(){
    let url = this._apiService.apiURL() + "/peminjaman-tambah.php";

    let isobatas = addDays(parseISO(this.pinjam), 7);
    this.batas = isobatas.toISOString();
    var formatbatas = format(parseISO(this.batas), 'dd-M-yyyy');

    var formatpinjam = format(parseISO(this.pinjam), 'dd-M-yyyy');

    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json"},
      data: {
        id_anggota: this.id_anggota,
        id_buku: this.id_buku,
        pinjam: formatpinjam,
        batas: formatbatas
      },
    }).then((data) => {
      this.id_anggota = '';
      this.id_buku = '';
      // this.pinjam = '';
      this.batas = '';
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Input data Peminjaman',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/peminjaman');
    }, (error) => {
      console.log(error);
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Input data Peminjaman',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
    })

    // const stringpinjam = format(parseISO(this.pinjam), 'd-M-yyyy');
    // console.log(this.pinjam);
    // console.log(stringpinjam);
    // console.log(this.batas);
    // const stringbatas = this.batas.toISOString();
    // console.log(stringbatas);

  }

}
