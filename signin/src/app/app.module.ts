import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {HttpClientService} from './httpclient.service';
import {AuthGaurdService} from './auth-gaurd.service';
import { EmployeeComponent } from './employee/employee.component';
import {TokenInterceptor} from './token-interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ AuthGaurdService,
    AuthenticationService,
    HttpClientService,
    {provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
