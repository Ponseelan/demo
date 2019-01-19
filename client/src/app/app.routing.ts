import {Routes,RouterModule} from '@angular/router';

import {RegisterComponent} from '../Register/app.RegisterComponent';
import { LoginComponent } from 'src/Login/app.LoginComponent';
const appRoutes:Routes=
[
    {path:'Login',component:LoginComponent},
    {path:'',component:LoginComponent},
    {path:'Register',component:RegisterComponent},
    {path:"RedirectRegister",redirectTo:"/Register"}
]

export const routing=RouterModule.forRoot(appRoutes);