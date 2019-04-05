import { Component, AfterViewChecked, InjectionToken } from '@angular/core';
import {User} from '../Model/user';
import {Router} from '@angular/router';
import { RegisterService } from 'src/service/RegisterService';
import {HttpClient } from '@angular/common/http';
 function getRegisterProvider(httpclient:HttpClient):RegisterService
{
   return new RegisterService(httpclient);
}
const  REGISTER_SERVICE_TOKEN=new InjectionToken<RegisterService>("REGISTER_SERVICE_TOKEN");
@Component(
    {
        selector:'login',
        templateUrl:"./app.RegisterComponent.html",
        providers:[{provide:REGISTER_SERVICE_TOKEN,deps:[HttpClient],useFactory:getRegisterProvider}]
    })
    export class RegisterComponent 
    {        
        constructor(private registerService:RegisterService,private router:Router)
        {
            
        }
        ResetAlreadyLoginNameExistErrorMessage()
        {
            console.log("error");
            if(!this.tohideErrorMessage)
            {
                this.tohideErrorMessage=true;
            }
        }
        userModel=new User("","","","");
        tohideErrorMessage:Boolean=true;
        ErrorMessage:String="";
        
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