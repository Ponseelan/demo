import { Component, OnInit } from "@angular/core";
import { JWTAuthenticator } from 'src/service/JWTAuthenticatorService';
import { Router } from '@angular/router';
import { UserEditComponent } from 'src/EditDialog/UserEdit/UserEditComponent';

@Component(
    {
        selector:'dashboard',
        templateUrl: './app.dashboard.html',
        entryComponents:[UserEditComponent]
    })
export class DashboardComponent implements OnInit {
    constructor(private jwtauthenticator: JWTAuthenticator,private router:Router) {

    }
    ngOnInit() {
        this.jwtauthenticator.validateToken(localStorage.getItem("UserName"))
            .subscribe(
                data => {
                    if (!data.status) {
                        this.router.navigate(['']);
                    }
                }
            );
    }
    logout() {
        localStorage.removeItem("UserName");
        this.router.navigate(['']);
    }
}