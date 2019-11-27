import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {routing} from "./app-routing.module";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {ApiService} from "./apiservice.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./token-interceptor.service";
import { SuccessComponent } from './success/success.component';

import {UserserviceService} from './userservice.service';
import { ManagerComponent } from './manager/manager.component';
import {ServiceService} from './service.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuccessComponent,
    ManagerComponent
 
  ],
  imports: [
    BrowserModule,
routing,
    ReactiveFormsModule,
    RecaptchaModule,
    HttpClientModule

  ],
  providers: [ApiService, 
    ServiceService,
    UserserviceService,
    {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
