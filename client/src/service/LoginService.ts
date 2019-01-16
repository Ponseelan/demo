import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Config} from "../config";
import {Observable} from 'rxjs';

// Import RxJs required methods
import {map} from 'rxjs/operators';
@Injectable()
export class LoginService 
{
    result:Object;
    constructor(public http:HttpClient)
    {}
    Auth(LoginModel):Observable<any>
    {
      return this.http.post(Config.AppURL+"/Login",LoginModel,{responseType:'json'});
    }
}