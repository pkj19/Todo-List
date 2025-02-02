import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./MyComponents/todos/todos.component";
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list-app';
}
