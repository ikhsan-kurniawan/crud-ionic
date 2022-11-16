import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnggotaLihatPageRoutingModule } from './anggota-lihat-routing.module';

import { AnggotaLihatPage } from './anggota-lihat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnggotaLihatPageRoutingModule
  ],
  declarations: [AnggotaLihatPage]
})
export class AnggotaLihatPageModule {}
