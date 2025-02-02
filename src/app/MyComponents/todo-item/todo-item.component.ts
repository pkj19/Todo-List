import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { Todo } from '../../todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo!: Todo; // Added @Input() decorator
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoToggle: EventEmitter<Todo> = new EventEmitter(); // New EventEmitter for toggle
  @Output()
  i!: number;
  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("onClick has been triggered");
  }

  onCheckboxClick(todo: Todo) {
    this.todoToggle.emit(todo); // Emit the todo object
  }
}
