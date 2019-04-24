import {Component} from '@angular/core';
import { LoginModel } from 'src/Model/LoginModel';
import {LoginService} from '../service/LoginService';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/service/SpinnerService';
@Component(
    {
        templateUrl:'./app.LoginComponent.html'
    })
    export class LoginComponent
    {
      IsLoginError:Boolean=false;
      LoginErrorMessage:String="";
        loginModel:LoginModel;
        constructor(private loginService:LoginService,private route:Router,private spinnerService:SpinnerService)
        {
           this.loginModel=new LoginModel();
        }
          Login()
          {
            this.spinnerService.display(true);
             this.loginService.Auth(this.loginModel)
             .subscribe((res)=>
             {
              this.spinnerService.display(false);
               if(!res.status)
               {
                   this.IsLoginError=res.status;
                   this.LoginErrorMessage=res.Message;    
               }
               else
               {
                localStorage.setItem("ClientToken",res.token);
                localStorage.setItem("UserId",res.UserId); 
                 this.route.navigate(["/dashboard"]);
               }
             })
          }  
    }