import { Component } from '@angular/core';
import {User} from '../Model/user';
import {AuthenticateService} from '../service/AuthenticateService';
@Component(
    {
        selector:'login',
        templateUrl:"./app.LoginComponent.html"
    })
    export class LoginComponent 
    {
        constructor(private authenticateService:AuthenticateService){}
         userModel=new User('Ponseelan','emil','check','password-1');
         submit()
         {
            this.authenticateService.login(this.userModel.LoginName,this.userModel.Password);
         }
    }