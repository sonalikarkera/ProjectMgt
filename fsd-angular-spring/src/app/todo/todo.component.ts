import { Component, OnInit } from '@angular/core';

import { TodoServiceService } from './../todo-service.service';
import { TodoModel } from './../todo-model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:TodoModel[];
 
  constructor(private todoServiceService:TodoServiceService) {}
   ngOnInit() {
     this.todoServiceService.findAll().subscribe(data => {
       this.todos = data;
     });
 }
 
 }