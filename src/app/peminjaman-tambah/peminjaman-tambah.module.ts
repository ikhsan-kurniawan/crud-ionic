import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeminjamanTambahPageRoutingModule } from './peminjaman-tambah-routing.module';

import { PeminjamanTambahPage } from './peminjaman-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeminjamanTambahPageRoutingModule
  ],
  declarations: [PeminjamanTambahPage]
})
export class PeminjamanTambahPageModule {}
