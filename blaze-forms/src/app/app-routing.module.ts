import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleAuthGuardComponent } from './config/gaurds/module-auth.gaurd';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: 'ux',
    loadChildren: () => import('./ux/ux.module').then(m => m.UxModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canLoad: [ModuleAuthGuardComponent]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
