import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeminjamanLihatPage } from './peminjaman-lihat.page';

const routes: Routes = [
  {
    path: '',
    component: PeminjamanLihatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeminjamanLihatPageRoutingModule {}
