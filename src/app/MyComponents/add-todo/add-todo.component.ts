import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../todo';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title: string = '';
  desc: string = '';
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    const todo = {
      sno: 0, // Set a static value for sno
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
    this.title = ''; // Reset title field
    this.desc = ''; // Reset description field
  }
}
