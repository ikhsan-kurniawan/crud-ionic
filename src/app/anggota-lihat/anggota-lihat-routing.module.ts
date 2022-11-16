import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnggotaLihatPage } from './anggota-lihat.page';

const routes: Routes = [
  {
    path: '',
    component: AnggotaLihatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnggotaLihatPageRoutingModule {}
