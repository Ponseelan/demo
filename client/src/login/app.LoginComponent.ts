import {Component} from '@angular/core';
import { User } from 'src/Model/user';
import { LoginModel } from 'src/Model/LoginModel';

@Component(
    {
        templateUrl:'./app.LoginComponent.html'
    })
    export class LoginComponent
    {
         loginModel:LoginModel;
        constructor()
        {
           this.loginModel=new LoginModel();
        }
          Login()
          {
             console.log(this.loginModel.LoginName);
          }  
    }