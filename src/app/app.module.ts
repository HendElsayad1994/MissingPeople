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

@NgModule({
  declarations: [
    AppComponent,
    test,
    MainPageComponent,
    LoginComponent,
    ChildInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ParentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }