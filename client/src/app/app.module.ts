import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from 'src/Register/app.RegisterComponent';
import{routing} from './app.routing';
import {FormsModule} from "@angular/forms"
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticateService } from 'src/service/AuthenticateService';
import { LoginComponent } from 'src/Login/app.LoginComponent';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthenticateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
