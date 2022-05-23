import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncStockProductPageRoutingModule } from './inc-stock-product-routing.module';

import { IncStockProductPage } from './inc-stock-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncStockProductPageRoutingModule
  ],
  declarations: [IncStockProductPage]
})
export class IncStockProductPageModule {}
