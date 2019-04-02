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
import { UserService } from 'src/service/UserService';
import { UserGrid } from 'src/Grid/UserGrids/app.UserGrid';
import { UserEditComponent } from 'src/EditDialog/UserEdit/UserEditComponent';
import { MatDialogModule, MatNativeDateModule, MatCardModule, MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ConfirmPasswordDirective,
    DashboardComponent,
    UserGrid,
  UserEditComponent
    ],
  imports: [
    BrowserModule,  
    BrowserAnimationsModule,  
    routing,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatNativeDateModule,
    AgGridModule.withComponents([])
  ],
  providers: [LoginService,RegisterService,JWTAuthenticator,UserService],
  bootstrap: [AppComponent],
  entryComponents: [
   UserEditComponent
   ]
})
export class AppModule { }
