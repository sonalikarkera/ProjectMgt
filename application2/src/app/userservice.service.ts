import { User } from './user';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiResponse} from './apiresponse';

@Injectable({
  providedIn: 'root'
})

export class UserserviceService 
{
  private mailingUrl: string;

  constructor(private http: HttpClient) 
  {
    this.mailingUrl = 'http://localhost:2000/send-email';
  }

 public sendMail(user)
{
    return this.http.post(this.mailingUrl, user);
  }
}