import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMaterialPageRoutingModule } from './add-material-routing.module';

import { AddMaterialPage } from './add-material.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMaterialPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddMaterialPage]
})
export class AddMaterialPageModule {}
