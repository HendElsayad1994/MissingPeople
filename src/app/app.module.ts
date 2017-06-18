
//import { MapLocComponent } from './map-loc/map-loc.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule , ApplicationRef} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

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
import { LocationComponent } from './location/location.component';
//import { [Map-Loc]Component } from './[map-loc]/[map-loc].component';
import {SocketIoModule, SocketIoConfig} from 'ng2-socket-io' 

const config:SocketIoConfig= {url:'http://realtimetrack.eu-2.evennode.com/', options:{}};

@NgModule({
  declarations: [
    AppComponent,
    test,
    MainPageComponent,
    LoginComponent,
    ChildInfoComponent,
    ChildrenComponent,
    LocationComponent,

    //[MapLoc]Component, MapLocComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyADdU2vsWzIC9_AtzkDUfogWJUgbSKb5-g'
    }),
    
    HttpModule,
    RouterModule.forRoot(App_Routes)
  ],
  providers: [ParentsService,ChildinfoService,ChildrenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
