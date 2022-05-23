import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncStockProductPage } from './inc-stock-product.page';

const routes: Routes = [
  {
    path: '',
    component: IncStockProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncStockProductPageRoutingModule {}
