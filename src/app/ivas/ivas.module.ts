import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IvasPageRoutingModule } from './ivas-routing.module';

import { IvasPage } from './ivas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IvasPageRoutingModule
  ],
  declarations: [IvasPage]
})
export class IvasPageModule {}
