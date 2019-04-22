import {Routes,RouterModule} from '@angular/router';

import {RegisterComponent} from '../Register/app.RegisterComponent';
import { LoginComponent } from 'src/Login/app.LoginComponent';
import { AdminDashboardComponent } from 'src/AdminDashboard/app.Admindashboard';
const appRoutes:Routes=
[
    {path:'Login',component:LoginComponent},
    {path:'',component:LoginComponent},
    {path:'Register',component:RegisterComponent},
    {path:"RedirectRegister",redirectTo:"/Register"},
    {path:'dashboard',component:AdminDashboardComponent}
]

export const routing=RouterModule.forRoot(appRoutes);