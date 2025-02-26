import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'scan',
    loadChildren: () => import('./pages/scan/scan.module').then( m => m.ScanPageModule)
  },
  {
    path: 'create-class',
    loadChildren: () => import('./pages/create-class/create-class.module').then( m => m.CreateClassPageModule)
  },
  {
    path: 'selector',
    loadChildren: () => import('./pages/selector/selector.module').then( m => m.SelectorPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'scaneo',
    loadChildren: () => import('./pages/scaneo/scaneo.module').then( m => m.ScaneoPageModule)
  },
  {
    path: 'asistentes',
    loadChildren: () => import('./pages/asistentes/asistentes.module').then( m => m.AsistentesPageModule)
  },
  {
    path: 'rickymorty',
    loadChildren: () => import('./rickymorty/rickymorty.module').then( m => m.RickymortyPageModule)
  },
  {
    path: 'character-detail/:id',  // Incluye el parámetro dinámico :id aquí
    loadChildren: () => import('./character-detail/character-detail.module').then( m => m.CharacterDetailPageModule)
  },
  {
    path: 'test-menu',
    loadChildren: () => import('./test-menu/test-menu.module').then( m => m.TestMenuPageModule)
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
