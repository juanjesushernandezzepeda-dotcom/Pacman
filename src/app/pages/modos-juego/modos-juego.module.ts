import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { ModosJuegoPageRoutingModule } from './modos-juego-routing.module';

import { ModosJuegoPage } from './modos-juego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModosJuegoPageRoutingModule
  ],
  declarations: [ModosJuegoPage]
})
export class ModosJuegoPageModule {}
