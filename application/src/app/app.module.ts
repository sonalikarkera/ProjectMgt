import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

import {routing} from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "./apiservice.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./token-interceptor";
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuccessComponent
 
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService, 
    {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }