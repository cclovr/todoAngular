import { Component, OnInit } from '@angular/core';
import { TodoModel } from './todo-model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent implements OnInit {
  todoList: TodoModel[] = [];
  index: string;

  ngOnInit() {}

  allTodos() {
    return Object.keys(this.todoList).length;
  }

  doneTodos() {
    this.todoList = this.todoList.filter(todo => {
      return todo.isCompleted === true;
    });
  }

  addToList(titleName) {
    this.todoList.push({
      title: titleName,
      isCompleted: true,
      editing: false
    });

  }

  onDelete(todo) {
    this.todoList = this.todoList.filter( item => {
      return item !== todo;
    });
  }

}
