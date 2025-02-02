import { Component } from '@angular/core';
import { Todo } from '../../todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  imports: [CommonModule, AddTodoComponent, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[] = []; // Initialize as an empty array
  localItem: string | null;

  constructor() {
    this.localItem = localStorage.getItem("todos");
    console.log('Local item from storage:', this.localItem); // Log the local item
    if (this.localItem) {
      this.todos = JSON.parse(this.localItem); // Assuming local storage contains a JSON string
      console.log('Todos loaded from local storage:', this.todos); // Log the loaded todos
    }
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    if (this.todos) {
      const index = this.todos.indexOf(todo);
      if (index > -1) {
        this.todos.splice(index, 1);
      }
      localStorage.setItem("todos", JSON.stringify(this.todos));
    } else {
      console.error('Todos array is undefined');
    }
  }

  addTodo(todo: Todo) {
    console.log('Adding todo:', todo); // Log the todo being added
    if (this.todos) {
      todo.sno = 0; // Set a static value for sno
      this.todos.push(todo);
      console.log('Current todos:', this.todos); // Log the current todos array
      localStorage.setItem("todos", JSON.stringify(this.todos));
    } else {
      console.error('Todos array is undefined');
    }
  }

  toggleTodo(todo: Todo) {
    if (this.todos) {
      const index = this.todos.indexOf(todo);
      if (index > -1) {
        this.todos[index].active = !this.todos[index].active; // Toggle the active status
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    } else {
      console.error('Todos array is undefined');
    }
  }
}
