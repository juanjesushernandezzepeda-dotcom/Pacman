import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModosJuegoPage } from './modos-juego.page';

const routes: Routes = [
  {
    path: '',
    component: ModosJuegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModosJuegoPageRoutingModule {}
