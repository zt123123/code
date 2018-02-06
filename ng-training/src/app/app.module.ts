import { LogService } from './service/log.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { UserComponent } from './user/user.component';
import { ShopComponent } from './shop/shop.component';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ShopComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
