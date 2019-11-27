import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SuccessComponent } from './success/success.component';
import { AuthGaurdService } from './auth-gaurd.service';
import {ManagerComponent} from './manager/manager.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'success', component: SuccessComponent, canActivate: [AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'manager', component: ManagerComponent, canActivate: [AuthGaurdService] },
];

export const routing = RouterModule.forRoot(routes);