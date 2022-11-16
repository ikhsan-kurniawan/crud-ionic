import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canLoad: [AutoLoginGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canLoad: [AuthGuard]  // Secure all child pages
  },
  {
    path: 'anggota',
    loadChildren: () => import('./anggota/anggota.module').then( m => m.AnggotaPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'anggota-tambah',
    loadChildren: () => import('./anggota-tambah/anggota-tambah.module').then( m => m.AnggotaTambahPageModule)
  },
  {
    path: 'anggota-edit/:id',
    loadChildren: () => import('./anggota-edit/anggota-edit.module').then( m => m.AnggotaEditPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'anggota-lihat/:id',
    loadChildren: () => import('./anggota-lihat/anggota-lihat.module').then( m => m.AnggotaLihatPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
