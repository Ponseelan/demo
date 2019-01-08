import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Config} from "../config";
import {Observable} from 'rxjs';

// Import RxJs required methods
import {map} from 'rxjs/operators';
@Injectable()
export class AuthenticateService 
{
    result:Object;
    constructor(public http:HttpClient)
    {}
    login(UserModel,callback)
    {
      return this.http.post(Config.AppURL+"/createUser",{UserModel},{responseType:'json'})
                 .pipe(map(data => {return data;}))
                 .subscribe((x)=>
                    {
                        callback(x);
                    })
            
    }
}