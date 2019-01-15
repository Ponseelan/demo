import { Component } from '@angular/core';
import {User} from '../Model/user';
import {AuthenticateService} from '../service/AuthenticateService';
import {Router} from '@angular/router';
@Component(
    {
        selector:'login',
        templateUrl:"./app.RegisterComponent.html"
    })
    export class RegisterComponent 
    {
        constructor(private authenticateService:AuthenticateService,private router:Router){}
        userModel=new User("","","","");
        tohideErrorMessage:Boolean=false;
        ErrorMessage:String="Ponseelan is Error";
        
         submit(HtmlInputElement)
         {
           this.authenticateService.login(this.userModel)
           .subscribe((res)=>
           {
            this.tohideErrorMessage=res.result; 
            this.ErrorMessage=res.Message;
            if(res.result)
            {
                this.router.navigate(['']);
            }
           })
}
}