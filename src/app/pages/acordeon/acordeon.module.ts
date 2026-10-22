import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { AcordeonPageRoutingModule } from './acordeon-routing.module';

import { AcordeonPage } from './acordeon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcordeonPageRoutingModule
  ],
  declarations: [AcordeonPage]
})
export class AcordeonPageModule {}
