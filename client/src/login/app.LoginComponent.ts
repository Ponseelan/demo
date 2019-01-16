import {Component} from '@angular/core';
import { User } from 'src/Model/user';
import { LoginModel } from 'src/Model/LoginModel';
import { HttpClient } from '@angular/common/http';
import {Config} from '../config';
@Component(
    {
        templateUrl:'./app.LoginComponent.html'
    })
    export class LoginComponent
    {
         loginModel:LoginModel;
        constructor(private httpClient:HttpClient)
        {
           this.loginModel=new LoginModel();
        }
          Login()
          {
             this.httpClient.post(Config.AppURL+"/Login",this.loginModel,{responseType:"json"})
            
             .subscribe((res)=>
             {
                console.log(res);
             })
          }  
    }