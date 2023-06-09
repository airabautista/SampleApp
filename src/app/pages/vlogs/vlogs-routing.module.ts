import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VlogsPage } from './vlogs.page';

const routes: Routes = [
  {
    path: '',
    component: VlogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VlogsPageRoutingModule {}
