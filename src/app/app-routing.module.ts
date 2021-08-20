import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateComponent } from './component/authenticate/authenticate.component';
import { ModuleAuthGuardComponent } from './config/gaurds/module-auth.gaurd';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  { 
    path: 'authenticate',
    component: AuthenticateComponent
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
  },
  {
    path: 'forms',
    loadChildren: () => import('./projects/forms/forms.module').then(m => m.FormModule),
    canLoad: [ModuleAuthGuardComponent]
  },
  { path: 'form-builder', loadChildren: () => import('./projects/form-builder/form-builder.module').then(m => m.FormBuilderModule),
},
    
  { path: 'work-spaces', 
    loadChildren: () => import('./projects/work-spaces/work-spaces.module').then(m => m.WorkSpacesModule), 
    canLoad: [ModuleAuthGuardComponent] 
  },
  { 
    path: 'manage-work-spaces', 
    loadChildren: () => import('./projects/manage-work-spaces/manage-work-spaces.module').then(m => m.ManageWorkSpacesModule), 
    canLoad: [ModuleAuthGuardComponent] 
  },
  {  
    path: 'manage-roles', 
    loadChildren: () => import('./projects/manage-roles/manage-roles.module').then(m => m.ManageRolesModule), 
    canLoad: [ModuleAuthGuardComponent] 
  },
  {  
    path: 'my-profile', 
    loadChildren: () => import('./projects/my-profile/my-profile.module').then(m => m.MyProfileModule), 
    canLoad: [ModuleAuthGuardComponent] 
  },
  { path: 'blazeforms', loadChildren: () => import('./projects/blazeforms/blazeforms.module').then(m => m.BlazeformsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
