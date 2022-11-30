import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeminjamanLihatPageRoutingModule } from './peminjaman-lihat-routing.module';

import { PeminjamanLihatPage } from './peminjaman-lihat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeminjamanLihatPageRoutingModule
  ],
  declarations: [PeminjamanLihatPage]
})
export class PeminjamanLihatPageModule {}
