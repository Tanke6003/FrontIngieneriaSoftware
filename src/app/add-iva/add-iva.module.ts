import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddIvaPageRoutingModule } from './add-iva-routing.module';

import { AddIvaPage } from './add-iva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddIvaPageRoutingModule
  ],
  declarations: [AddIvaPage]
})
export class AddIvaPageModule {}
