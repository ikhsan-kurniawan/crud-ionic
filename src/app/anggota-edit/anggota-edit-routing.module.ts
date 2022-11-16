import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnggotaEditPage } from './anggota-edit.page';

const routes: Routes = [
  {
    path: '',
    component: AnggotaEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnggotaEditPageRoutingModule {}
