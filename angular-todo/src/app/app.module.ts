import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutofocusModule } from 'angular-autofocus-fix';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import { AddTodoComponent } from './todo-list/add-todo/add-todo.component';
import { DoneTodoComponent } from './todo-list/done-todo/done-todo.component';
import { MessagesComponent } from './todo-list/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    AddTodoComponent,
    DoneTodoComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AutofocusModule,
    ToastModule,
    BrowserAnimationsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
