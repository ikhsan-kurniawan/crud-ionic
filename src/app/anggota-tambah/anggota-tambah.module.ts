import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnggotaTambahPageRoutingModule } from './anggota-tambah-routing.module';

import { AnggotaTambahPage } from './anggota-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnggotaTambahPageRoutingModule
  ],
  declarations: [AnggotaTambahPage]
})
export class AnggotaTambahPageModule {}
