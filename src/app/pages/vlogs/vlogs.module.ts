import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VlogsPageRoutingModule } from './vlogs-routing.module';

import { VlogsPage } from './vlogs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VlogsPageRoutingModule
  ],
  declarations: [VlogsPage]
})
export class VlogsPageModule {}
