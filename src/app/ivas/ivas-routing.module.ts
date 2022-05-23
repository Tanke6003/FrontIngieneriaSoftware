import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IvasPage } from './ivas.page';

const routes: Routes = [
  {
    path: '',
    component: IvasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IvasPageRoutingModule {}
