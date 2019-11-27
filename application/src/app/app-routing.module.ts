import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { SuccessComponent } from './success/success.component';
import {AuthGaurdService} from './auth-gaurd.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent ,canActivate:[AuthGaurdService]},
{path: 'success', component:SuccessComponent,canActivate:[AuthGaurdService] },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);