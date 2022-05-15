import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu/employees',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'add-employee',
    loadChildren: () => import('./add-employee/add-employee.module').then( m => m.AddEmployeePageModule)
  },
  {
    path: 'view-employee/:idEmployee',
    loadChildren: () => import('./view-employee/view-employee.module').then( m => m.ViewEmployeePageModule)
  },
  {
    path: 'add-material',
    loadChildren: () => import('./add-material/add-material.module').then( m => m.AddMaterialPageModule)
  },
  {
    path: 'view-material/:idMaterial',
    loadChildren: () => import('./view-material/view-material.module').then( m => m.ViewMaterialPageModule)
  },
  


  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
