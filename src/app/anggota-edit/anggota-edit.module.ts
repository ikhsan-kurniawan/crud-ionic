import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnggotaEditPageRoutingModule } from './anggota-edit-routing.module';

import { AnggotaEditPage } from './anggota-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnggotaEditPageRoutingModule
  ],
  declarations: [AnggotaEditPage]
})
export class AnggotaEditPageModule {}
