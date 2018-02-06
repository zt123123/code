import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { UserComponent } from './user/user.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'user', component: UserComponent },
  { path: 'shop', component: ShopComponent },
  { path: '**', pathMatch: 'full', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }