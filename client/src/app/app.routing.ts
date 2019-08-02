import {Routes,RouterModule} from '@angular/router';

import {RegisterComponent} from '../Register/app.RegisterComponent';
import { LoginComponent } from 'src/Login/app.LoginComponent';
import { DashboardComponent } from 'src/Dashboard/app.Dashboard';
import { UserGrid } from 'src/Grid/UserGrids/app.UserGrid';
const appRoutes:Routes=
[
    {path:'Login',component:LoginComponent},
    {path:'',component:LoginComponent},
    {path:'Register',component:RegisterComponent},
    {path:"RedirectRegister",redirectTo:"/Register"},
    {path:'dashboard',component:DashboardComponent,children:
    [
        {
            path:"UserGrid",
            component:UserGrid
        }
    ]
    }
]

export const routing=RouterModule.forRoot(appRoutes);