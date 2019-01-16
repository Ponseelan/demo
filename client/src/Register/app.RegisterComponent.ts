import { Component } from '@angular/core';
import {User} from '../Model/user';
import {Router} from '@angular/router';
import { RegisterService } from 'src/service/RegisterService';
@Component(
    {
        selector:'login',
        templateUrl:"./app.RegisterComponent.html"
    })
    export class RegisterComponent 
    {
        constructor(private registerService:RegisterService,private router:Router){}
        userModel=new User("","","","");
        tohideErrorMessage:Boolean=false;
        ErrorMessage:String="Ponseelan is Error";
        
         submit(HtmlInputElement)
         {
           this.registerService.Register(this.userModel)
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