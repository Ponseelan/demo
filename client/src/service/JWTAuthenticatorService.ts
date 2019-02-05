import { Injector, Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Config } from 'src/config';

@Injectable()
export class JWTAuthenticator
{
constructor(private http:HttpClient)
{

}
validateToken(token :String):Observable<any>
{
return this.http.post(Config.AppURL+"/validatejwt",{token},{responseType:"json"});
}
}