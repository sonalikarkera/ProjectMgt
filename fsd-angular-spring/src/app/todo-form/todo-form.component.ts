import { Component, OnInit } from '@angular/core';
import {TodoServiceService} from '../todo-service.service';
import { TodoModel } from './../todo-model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent  {
  todo: TodoModel;
  constructor(private route: ActivatedRoute, 
    private router: Router, 
      private todoServiceService: TodoServiceService) {
  this.todo = new TodoModel(); }

  onSubmit() {
    this.todoServiceService.save(this.todo).subscribe(result => this.gotoTodoList());
  }
 
  gotoTodoList() {
    this.router.navigate(['/todos']);
  }

}