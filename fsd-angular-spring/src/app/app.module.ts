import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {TodoServiceService} from './todo-service.service';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoComponent } from './todo/todo.component';
import { Observable } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    TodoFormComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    Observable,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'todo', component: TodoComponent },
      { path: 'addtodo', component: TodoFormComponent }
      ])
  ],
  providers: [TodoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
