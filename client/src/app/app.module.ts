import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from 'src/Register/app.RegisterComponent';
import{routing} from './app.routing';
import {FormsModule} from "@angular/forms"
import {AgGridModule} from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from 'src/service/LoginService';
import { LoginComponent } from 'src/Login/app.LoginComponent';
import { RegisterService } from 'src/service/RegisterService';
import { ConfirmPasswordDirective } from 'src/Directive/app.ConfirmPasswordDirective';
import { DashboardComponent } from 'src/Dashboard/app.dashboard';
import { JWTAuthenticator } from 'src/service/JWTAuthenticatorService';
import { MyGridApplicationComponent } from 'src/Grid/MyGridApplication/app.MyGridApplication';
import { RedComponentComponent } from 'src/Grid/RedComponent/app.RedComponent';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ConfirmPasswordDirective,
    DashboardComponent,
    MyGridApplicationComponent,
        RedComponentComponent
    ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([RedComponentComponent])
  ],
  providers: [LoginService,RegisterService,JWTAuthenticator],
  bootstrap: [AppComponent]
})
export class AppModule { }
