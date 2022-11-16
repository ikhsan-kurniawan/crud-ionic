import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnggotaPageRoutingModule } from './anggota-routing.module';

import { AnggotaPage } from './anggota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnggotaPageRoutingModule
  ],
  declarations: [AnggotaPage]
})
export class AnggotaPageModule {}
