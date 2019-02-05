import {Component} from '@angular/core';
import { LoginModel } from 'src/Model/LoginModel';
import {LoginService} from '../service/LoginService';
import { Router } from '@angular/router';
@Component(
    {
        templateUrl:'./app.LoginComponent.html'
    })
    export class LoginComponent
    {
      IsLoginError:Boolean=false;
      LoginErrorMessage:String="";
        loginModel:LoginModel;
        constructor(private loginService:LoginService,private route:Router)
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
               }
               else
               {
                localStorage.setItem("UserName",res.token); 
                 this.route.navigate(["/dashboard"]);
               }
             })
          }  
    }