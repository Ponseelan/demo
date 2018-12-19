import { Component } from '@angular/core';
import {User} from '../Model/user';
@Component(
    {
        selector:'login',
        templateUrl:"./app.LoginComponent.html"
    })
    export class LoginComponent 
    {
         userModel=new User('POnseelan','emil','check','password-1');
         submit()
         {
             console.log(this.userModel);
         }
    }