
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {RegisterComponent} from './Authentication/register/register.component';
import {LoginComponent} from './Authentication/login/login.component';


const routes: Routes = [
    
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [LoginComponent, RegisterComponent]