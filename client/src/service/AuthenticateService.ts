import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {} from 'rxjs/add/operator/map';
import {Config} from "../config";
@Injectable()
export class AuthenticateService 
{
    constructor(public http:HttpClient)
    {}
    login(loginName :String,Password:String)
    {
  this.http.post(Config.AppURL+"/createUser",{LoginName:loginName,Password:Password})
  .subscribe(data=>{console.log(data)});
    }
}