import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { routing } from "./app-routing.module";
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login.component';

import { ApiService } from "./services/apiservice.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TokenInterceptor } from "./services/token-interceptor.service";
import { SuccessComponent } from './components/success/success.component';
import { UserserviceService } from './services/userservice.service';
import { ManagerComponent } from './components/manager/manager.component';
import { ServiceService } from './services/service.service';
import { AgreedocComponent } from './components/agreedoc/agreedoc.component';

//anusha
import { CompletedProjectComponent } from './components/completed-project/completed-project.component';
import { ChartService } from './services/chart.service';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CardSmComponent } from './components/cards/card-sm/card-sm.component';
import { CardLayoutComponent } from './layout/card-layout/card-layout.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatBadgeModule} from '@angular/material/badge';
import {ChartsModule} from 'ng2-charts';
import { CardHrChartComponent } from './components/cards/card-hr-chart/card-hr-chart.component';
import { CardVrChartComponent } from './components/cards/card-vr-chart/card-vr-chart.component';
import { TaskComponent } from './components/task/task.component';
import { WorkforceComponent } from './layout/work-force/work-force.component';
import { SubtaskComponent } from './components/subtask/subtask.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {ProgressBarModule} from "angular-progress-bar";
import { OngoingProjectComponent } from './components/ongoing-project/ongoing-project.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import {MatPaginatorModule} from '@angular/material/paginator';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuccessComponent,
    ManagerComponent,
    AgreedocComponent,
    CardLayoutComponent,
    WorkforceComponent,
    TaskComponent,
    SubtaskComponent,
    CompletedProjectComponent,
    OngoingProjectComponent,
    ProjectDetailsComponent,
    CardHrChartComponent,
    CardSmComponent,
    CardVrChartComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    routing,
    MaterialModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    RecaptchaModule,
    ChartsModule,
    HttpClientModule,
    MatGridListModule,
    ProgressBarModule,
    MatBadgeModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      outerStrokeColor: "#78C000",
      animationDuration: 300,
      showInnerStroke: false,
      showSubtitle: false,
      maxPercent: 100,
      unitsFontSize: "50",
      titleFontSize: "50",
      responsive: true
    })
  ],
  providers: [ApiService,
    ServiceService, ChartService,
    UserserviceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
