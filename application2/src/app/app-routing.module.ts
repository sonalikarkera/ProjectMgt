import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./layout/login/login.component";
import { SuccessComponent } from './components/success/success.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import {ManagerComponent} from './components/manager/manager.component';
import { AgreedocComponent } from './components/agreedoc/agreedoc.component';
import {CardLayoutComponent} from './layout/card-layout/card-layout.component';
import {WorkforceComponent} from './layout/work-force/work-force.component';
import {TaskComponent} from './components/task/task.component';
import {SubtaskComponent} from './components/subtask/subtask.component';
import {CompletedProjectComponent} from './components/completed-project/completed-project.component';
import {OngoingProjectComponent} from './components/ongoing-project/ongoing-project.component';
import {ProjectDetailsComponent} from './components/project-details/project-details.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'success', component: SuccessComponent, canActivate: [AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'manager', component: ManagerComponent, canActivate: [AuthGaurdService] },
  {path: 'agreedoc', component: AgreedocComponent, canActivate: [AuthGaurdService]},
  { path: 'project', component: CardLayoutComponent},
  { path: 'workforce', component:WorkforceComponent},
  { path: 'task', component: TaskComponent},
  {path: 'subtask', component: SubtaskComponent},
  {path: 'completed', component: CompletedProjectComponent},
  {path:'ongoing',component:OngoingProjectComponent},
  {path: 'details', component:ProjectDetailsComponent},
  {path: 'side-nav', component:SidenavComponent}
];

export const routing = RouterModule.forRoot(routes);