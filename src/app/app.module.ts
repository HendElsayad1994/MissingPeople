import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { test } from './test.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { ParentsService } from "app/login/parents.service";
import { ChildInfoComponent } from './child-info/child-info.component';
import { ChildinfoService } from "app/child-info/childinfo.service";
import { ChildrenComponent } from './children/children.component';
import { ChildrenService } from "app/children/children.service";
import { RouterModule } from "@angular/router";
import {  App_Routes } from "app/app.routes";

@NgModule({
  declarations: [
    AppComponent,
    test,
    MainPageComponent,
    LoginComponent,
    ChildInfoComponent,
    ChildrenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(App_Routes)
  ],
  providers: [ParentsService,ChildinfoService,ChildrenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
