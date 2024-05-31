import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'

export const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
   {
      path: 'manager',
      loadChildren: () =>
         import('./manager/manager.module').then((mm) => mm.ManagerModule),
   },
   {
      path: 'user',
      loadChildren: () => import('./user/user.module').then((um) => um.UserModule),
   },
   {
      path: 'pos',
      loadChildren: () => import('./pos/pos.module').then((pm) => pm.PosModule),
   },
   {
      path: 'inventory',
      loadChildren: () =>
         import('./inventory/inventory.module').then((im) => im.InventoryModule),
   },
   {
      path: '**',
      loadComponent: () =>
         import('./page-not-found/page-not-found.component').then(
            (pnf) => pnf.PageNotFoundComponent
         ),
   },
]
