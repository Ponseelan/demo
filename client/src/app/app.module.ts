import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from 'src/Register/app.RegisterComponent';
import{routing} from './app.routing';
import {FormsModule} from "@angular/forms"
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from 'src/service/LoginService';
import { LoginComponent } from 'src/Login/app.LoginComponent';
import { RegisterService } from 'src/service/RegisterService';
import { ConfirmPasswordDirective } from 'src/Directive/app.ConfirmPasswordDirective';
import { DashboardComponent } from 'src/Dashboard/app.dashboard';
import { JWTAuthenticator } from 'src/service/JWTAuthenticatorService';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ConfirmPasswordDirective,
    DashboardComponent
    ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService,RegisterService,JWTAuthenticator],
  bootstrap: [AppComponent]
})
export class AppModule { }
