import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSellPageRoutingModule } from './add-sell-routing.module';

import { AddSellPage } from './add-sell.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSellPageRoutingModule
  ],
  declarations: [AddSellPage]
})
export class AddSellPageModule {}
