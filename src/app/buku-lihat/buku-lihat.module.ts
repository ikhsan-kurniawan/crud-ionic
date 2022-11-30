import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BukuLihatPageRoutingModule } from './buku-lihat-routing.module';

import { BukuLihatPage } from './buku-lihat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BukuLihatPageRoutingModule
  ],
  declarations: [BukuLihatPage]
})
export class BukuLihatPageModule {}
