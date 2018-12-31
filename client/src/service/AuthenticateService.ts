import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {} from 'rxjs/add/operator/map';
import {Config} from "../config";
@Injectable()
export class AuthenticateService 
{
    constructor(public http:HttpClient)
    {}
    login(UserModel)
    {
  this.http.post(Config.AppURL+"/createUser",{UserModel},{responseType:"text"})
  .subscribe(data=>{console.log(data)});
    }
}