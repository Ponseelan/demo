import {Component} from '@angular/core';
import { User } from 'src/Model/user';
import { LoginModel } from 'src/Model/LoginModel';
import {LoginService} from '../service/LoginService';
import { HttpClient } from '@angular/common/http';
import {Config} from '../config';
@Component(
    {
        templateUrl:'./app.LoginComponent.html'
    })
    export class LoginComponent
    {
      IsLoginError:Boolean=false;
      LoginErrorMessage:String="";
        loginModel:LoginModel;
        constructor(private loginService:LoginService)
        {
           this.loginModel=new LoginModel();
        }
          Login()
          {
             this.loginService.Auth(this.loginModel)
             .subscribe((res)=>
             {
               if(!res.status)
               {
                   this.IsLoginError=res.status;
                   this.LoginErrorMessage=res.Message;   
                   localStorage.setItem("UserName","ponseelan");     
               }
             })
          }  
    }