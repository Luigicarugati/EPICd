import { Component } from '@angular/core';
import { TodoService } from '../../todo.service';
import { iTodo } from '../../Models/todo';
import { iUser } from '../../Models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  usersWithTodos: Array<{ user: iUser, todos: iTodo[] }> = [];

  constructor(private todoSvc: TodoService) { }

  ngOnInit(): void {
    this.usersWithTodos = this.todoSvc.getUsersWithTodos();
  }

  toggleCompletion(todo: iTodo): void {
    todo.completed = !todo.completed;
    this.todoSvc.updateTodoStatus(todo.id, todo.completed);
  }

}
