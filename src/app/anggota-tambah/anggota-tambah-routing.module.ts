import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnggotaTambahPage } from './anggota-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: AnggotaTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnggotaTambahPageRoutingModule {}
