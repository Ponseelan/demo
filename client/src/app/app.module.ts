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
import { DummyDirective } from 'src/Directive/app.DummyDirective';
import { LoopDirective } from 'src/Directive/app.LoopDirective';

@NgModule({
  declarations: [
    AppComponent,
    LoopDirective,
    RegisterComponent,
    LoginComponent,
    DummyDirective
    ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService,RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
