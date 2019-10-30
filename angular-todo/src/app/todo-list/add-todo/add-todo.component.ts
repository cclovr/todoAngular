import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/components/common/api';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.sass']
})
export class AddTodoComponent implements OnInit {
  todoTitle: string;
  form: FormGroup;

  @Output() addTodo = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group(
      { name: ['', Validators.required]}
    );
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.form.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  onSubmit() {
    const controls = this.form.controls;
    if (this.form.invalid) {
      this.messageService.add(
      {
        severity: 'error',
        summary: 'Error',
        detail: 'The field is not filled'
      });
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      return;
    } else {
      this.messageService.add(
        {
          severity: 'success',
          summary: 'Todo has been added',
          detail: 'You addded'
        });
      this.addTodo.emit(this.form.value.name);
    }
  }
}
