import { Component, OnInit } from '@angular/core';
import { TodoModel } from './todo-model';
import { MessageService } from 'primeng/components/common/api';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent implements OnInit {
  todoList: TodoModel[] = [];
  index: string;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  addToList(titleName) {
    if (titleName === undefined) {
      this.messageService.add(
        {
          severity: 'error',
          summary: 'Error',
          detail: 'The field is not filled'
        });
    } else {
      this.messageService.add(
        {
          severity: 'success',
          summary: 'Todo has been added',
          detail: `You addded "${titleName}"`
        });
      this.todoList.push({
        title: titleName,
        isCompleted: true,
        editing: false
      });
    }
  }

  onDelete(todo) {
    this.todoList = this.todoList.filter( item => {
      return item !== todo;
    });
  }

}
