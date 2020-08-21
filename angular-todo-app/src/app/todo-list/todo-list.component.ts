import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todos: Todo[];
  @Output() deleteTodo = new EventEmitter<number>();
}
