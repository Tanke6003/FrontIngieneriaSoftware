import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSellPage } from './add-sell.page';

const routes: Routes = [
  {
    path: '',
    component: AddSellPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSellPageRoutingModule {}
