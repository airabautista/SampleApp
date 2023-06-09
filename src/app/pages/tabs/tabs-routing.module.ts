import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { 
        path: 'create',
        children: [
          {
            path:'', loadChildren: () => import ('../create/create.module').then(m => m.CreatePageModule)
          }
        ]
    },
    { 
      path: 'list',
      children: [
        {
          path:'', loadChildren: () => import ('../list/list.module').then(m => m.ListPageModule)
        }
      ]
    },
    { 
    path: 'trash',
    children: [
        {
          path:'', loadChildren: () => import ('../trash/trash.module').then(m => m.TrashPageModule)
        }
      ] 
    },
    { 
      path: 'vlogs',
      children: [
          {
            path:'', loadChildren: () => import ('../vlogs/vlogs.module').then(m => m.VlogsPageModule)
          }
        ] 
      },
      { 
        path: 'home',
        children: [
            {
              path:'', loadChildren: () => import ('../home/home.module').then(m => m.HomePageModule)
            }
          ] 
        }
  ]
  },
  {
    path: '',
    redirectTo:'tabs/create',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
