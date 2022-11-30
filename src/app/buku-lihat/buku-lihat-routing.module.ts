import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BukuLihatPage } from './buku-lihat.page';

const routes: Routes = [
  {
    path: '',
    component: BukuLihatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BukuLihatPageRoutingModule {}
