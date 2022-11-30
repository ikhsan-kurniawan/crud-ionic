import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { AuthenticationService } from '../services/authentication.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from "../api.service";

const USERNAME = 'namasaya';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public nama= '';
  anggota: any[];
  numAnggota: any;
  buku: any[];
  numBuku: any;
  peminjaman: any[];
  numPeminjaman: any;

  constructor(
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router : Router,
    public _apiService: ApiService,
  ) {
    this.getAnggota();
    this.getBuku();
    this.getPeminjaman();
  }

  ngOnInit() {
    this.cekSesi();
    console.log(this.nama);
  }

  async cekSesi() {
    const ambilNama = await Preferences.get({ key: USERNAME });
    if (ambilNama && ambilNama.value) {
      let namauser = ambilNama.value;
      this.nama = namauser;
    } else {
    }
  }

  getAnggota(){
    this._apiService.getAnggota().subscribe((res:any)=>{
      console.log("sukses", res);
      this.anggota = res;
      this.numAnggota = this.anggota.length;
      
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
      this.numBuku = this.buku.length;
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

  getPeminjaman(){
    this._apiService.getPeminjaman().subscribe((res:any)=>{
      console.log("sukses", res);
      this.peminjaman = res;
      this.numPeminjaman = this.peminjaman.length;
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

  // logout() {
  //   this.alertController.create({
  //     header: 'Perhatian',
  //     subHeader: 'Yakin Logout aplikasi ?',
  //     buttons: [
  //       {
  //         text: 'Batal',
  //         handler: (data: any) => {
  //           console.log('Canceled', data);
  //         }
  //       },
  //       {
  //         text: 'Yakin',
  //         handler: (data: any) => {
  //           //jika tekan yakin
  //           this.authService.logout();
  //           this.router.navigateByUrl('/', { replaceUrl: true });
  //         }
  //       }
  //     ]
  //   }).then(res => {
  //     res.present();
  //   });
  // }

}
