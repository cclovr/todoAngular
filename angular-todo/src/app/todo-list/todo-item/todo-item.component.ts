import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {TodoModel} from '../todo-model';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoModel;
  @Output() delete = new EventEmitter();
  @Output() completed = new EventEmitter();
  beforeEditingCache: string = '';
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

  deleteTodo() {
    this.delete.emit(this.todo);
  }

  setCompleted() {
    this.todo.isCompleted = !this.todo.isCompleted;
  }

  editTodo(todo: TodoModel): void {
    this.beforeEditingCache = todo.title
    this.todo.editing = true;
  }

  doneEdit(todo: TodoModel): void {
   todo.editing = false;
   if (todo.title.trim().length === 0) {
     todo.title = this.beforeEditingCache;
   }
  }
  cancelEdit(todo: TodoModel): void {
      todo.title = this.beforeEditingCache;
      this.todo.editing = false;
  }

}
