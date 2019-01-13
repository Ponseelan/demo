import {Routes,RouterModule} from '@angular/router';

import {RegisterComponent} from '../Register/app.RegisterComponent';
const appRoutes:Routes=
[
    {path:'Login',component:RegisterComponent},
    {path:'',component:RegisterComponent}
]

export const routing=RouterModule.forRoot(appRoutes);