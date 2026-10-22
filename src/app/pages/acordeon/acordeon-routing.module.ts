import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcordeonPage } from './acordeon.page';

const routes: Routes = [
  {
    path: '',
    component: AcordeonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcordeonPageRoutingModule {}
