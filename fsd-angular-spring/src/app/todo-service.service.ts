import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {TodoModel} from './todo-model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private todoUrl: string;

  constructor(private http: HttpClient) {
    this.todoUrl = 'http://b8java14.iiht.tech:9143/api/emp';
  }
  public findAll(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(this.todoUrl);
  }
 
  public save(todo: TodoModel) {
    return this.http.post<TodoModel>(this.todoUrl, todo);
  }
}
