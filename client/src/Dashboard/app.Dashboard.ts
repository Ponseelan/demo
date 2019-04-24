import { Component, OnInit } from "@angular/core";
import { JWTAuthenticator } from 'src/service/JWTAuthenticatorService';
import { Router } from '@angular/router';
import { UserEditComponent } from 'src/EditDialog/UserEdit/UserEditComponent';
import { User } from 'src/Model/user';
import { UserService } from 'src/service/UserService';
import { map } from 'rxjs/operators';
import { Config } from 'src/config';

@Component(
    {
        selector:'dashboard',
        templateUrl: './app.Dashboard.html',
        entryComponents:[UserEditComponent],
        styleUrls:['./app.dashboard.css']
    })
export class DashboardComponent implements OnInit {
    private UserModel:User;
    constructor(private jwtauthenticator: JWTAuthenticator,private router:Router,private userService:UserService)
    {
        this.UserModel=new User("","","","",false,null);
    }
    validateClientToken()
    {
        this.jwtauthenticator.validateToken(localStorage.getItem("ClientToken"))
        .subscribe(
            data => {
                if (!data.status) {
                    this.router.navigate(['']);
                }
            }
        );
    }
    ngOnInit() 
    {
        this.validateClientToken();
        this.LoadUser();    
    }
   LoadUser()
   {
       var UserId={Id:localStorage.getItem("UserId")};
var x=this.userService.GetSingleUserById(UserId)
.subscribe(res=>
{
   this.UserModel.IsAdmin=res.IsAdmin;
   this.UserModel.file=Config.AppURL+"/"+res.imgPath;
});
console.log(x);
   }
    logout() {
        localStorage.removeItem("ClientToken");
        localStorage.removeItem("UserId");
        this.router.navigate(['']);
    }
}