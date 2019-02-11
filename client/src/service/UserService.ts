import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Config } from 'src/config';
import { Observable } from 'rxjs';

@Injectable()
export class UserService
{
    constructor(private http:HttpClient){}
    GetAllUsers():Observable<any>
    {
            return this.http.get(Config.AppURL+"/GetAllUsers",{responseType:"json"});
    }
}