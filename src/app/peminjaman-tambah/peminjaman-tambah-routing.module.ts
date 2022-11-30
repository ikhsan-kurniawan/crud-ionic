import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeminjamanTambahPage } from './peminjaman-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: PeminjamanTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeminjamanTambahPageRoutingModule {}
