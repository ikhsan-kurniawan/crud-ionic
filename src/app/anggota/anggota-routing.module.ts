import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnggotaPage } from './anggota.page';

const routes: Routes = [
  {
    path: '',
    component: AnggotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnggotaPageRoutingModule {}
