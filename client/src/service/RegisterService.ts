import {Injectable} from '@angular/core'
import {HttpClient } from '@angular/common/http';
import { Config } from 'src/config';
import { Observable } from 'rxjs';

@Injectable()
export class RegisterService
{
        constructor(private httpClient:HttpClient)
        {

        }
        Register(UserModel):Observable<any>
        {
                return this.httpClient.post(Config.AppURL+"/createUser",UserModel);
           //return this.httpClient.post(Config.AppURL+"/createUser",{UserModel},{headers:{'content-type':'multipart/form-data'}, responseType:"json"});
        }
}