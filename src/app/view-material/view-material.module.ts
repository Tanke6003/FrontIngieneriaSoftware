import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMaterialPageRoutingModule } from './view-material-routing.module';

import { ViewMaterialPage } from './view-material.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ViewMaterialPageRoutingModule,
  ],
  declarations: [ViewMaterialPage]
})
export class ViewMaterialPageModule {}
