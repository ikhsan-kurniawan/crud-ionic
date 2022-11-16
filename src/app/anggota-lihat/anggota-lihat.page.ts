import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Http } from "@capacitor-community/http";

@Component({
  selector: 'app-anggota-lihat',
  templateUrl: './anggota-lihat.page.html',
  styleUrls: ['./anggota-lihat.page.scss'],
})
export class AnggotaLihatPage implements OnInit {
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

}
