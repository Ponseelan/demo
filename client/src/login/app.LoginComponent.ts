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
        userModel=new User("","","","");
        tohideErrorMessage:Boolean=false;
        ErrorMessage:String="Ponseelan is Error";
        
         submit()
         {
           this.authenticateService.login(this.userModel)
           .subscribe((res)=>
           {
            this.tohideErrorMessage=res.result; 
            this.ErrorMessage=res.Message;
           })
}
}