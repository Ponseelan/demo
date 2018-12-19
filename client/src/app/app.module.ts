import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from 'src/login/app.LoginComponent';
import{routing} from './app.routing';
import {FormsModule} from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
