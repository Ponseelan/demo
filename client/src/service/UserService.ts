import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Config } from 'src/config';
import { Observable, config } from 'rxjs';

@Injectable()
export class UserService
{
    constructor(private http:HttpClient){}
    GetAllUsers():Observable<any>
    {
            return this.http.get(Config.AppURL+"/GetAllUsers",{responseType:"json"});
    }
    GetSingleUserById(body):Observable<any>
    {
        return this.http.post(Config.AppURL+"/GetSingleUserById",body,{responseType:"json"});
    }
}