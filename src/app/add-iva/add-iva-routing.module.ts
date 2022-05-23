import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddIvaPage } from './add-iva.page';

const routes: Routes = [
  {
    path: '',
    component: AddIvaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddIvaPageRoutingModule {}
