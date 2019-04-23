import { Component,  InjectionToken, ViewChild, ElementRef, Output } from '@angular/core';
import {User} from '../Model/user';
import {Router} from '@angular/router';
import { RegisterService } from 'src/service/RegisterService';
import {HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { SpinnerService } from 'src/service/SpinnerService';
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
        @ViewChild('File') private inputFile:ElementRef;
        @Output() changeStatus=new EventEmitter<string>();
        constructor(private registerService:RegisterService,private router:Router,private SpinnerService:SpinnerService)
        {
            this.changeStatus.emit("d");
        }

        ResetAlreadyLoginNameExistErrorMessage()
        {
            if(!this.tohideErrorMessage)
            {
                this.tohideErrorMessage=true;
            }
        }
        userModel=new User("","","","",false,null);
        tohideErrorMessage:Boolean=true;
        ErrorMessage:String="";
        fileChanged(event)
        {
            this.userModel.file=event.target.files[0];
        }
         submit()
         {
             this.SpinnerService.display(true);
            let inputEl: HTMLInputElement = this.inputFile.nativeElement;
            let fileCount: number = inputEl.files.length;
var formData=new FormData();
if (fileCount > 0) 
{ 
    for (let i = 0; i < fileCount; i++) {
        formData.append('userPhoto', inputEl.files.item(i));
    }
}
formData.append("userModel",JSON.stringify(this.userModel));
           this.registerService.Register(formData)
           .subscribe((res)=>
           {
               this.SpinnerService.display(false);
            this.tohideErrorMessage=res.result; 
            this.ErrorMessage=res.Message;
            if(res.result)
            {
                this.router.navigate(['']);
            }
           })
        }
}