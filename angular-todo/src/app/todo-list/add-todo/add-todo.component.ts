import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.sass']
})
export class AddTodoComponent{
  todoTitle: string;

  @Output() addTodo = new EventEmitter();

  constructor() { }

  addToList(event) {
    this.addTodo.emit(this.todoTitle);
    this.todoTitle = undefined;
  }
}
