import {Routes,RouterModule} from '@angular/router';

import {LoginComponent} from '../login/app.LoginComponent';
const appRoutes:Routes=
[
    {path:'Login',component:LoginComponent},
    {path:'',component:LoginComponent}
]

export const routing=RouterModule.forRoot(appRoutes);