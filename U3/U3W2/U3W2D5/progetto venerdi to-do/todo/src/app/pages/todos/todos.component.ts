


import { Component, OnInit } from '@angular/core';
import { iTodowithuser } from '../../Models/todowithuser';
import { TodoService } from '../../todo.service';



      @Component({
        selector: 'app-todos',
        templateUrl: './todos.component.html',
        styleUrl: './todos.component.scss'
      })


export class TdsComp implements OnInit {

  todosWithUsers: iTodowithuser[] = [];
  filter: iTodowithuser[] = [];
  filterText: string = '';

  constructor(private todoSvc: TodoService) { }





  toggleCompletion(card: iTodowithuser): void {
    card.completed = !card.completed;
    this.todoSvc.updateTodoStatus(card.id, card.completed);
  }



  ngOnInit(): void {
    this.todosWithUsers = this.todoSvc.getTodosWithUsers();
    this.filter = this.todosWithUsers;
  }




  filterTodos(): void {
    const lowerCaseFilter = this.filterText.toLowerCase();
    this.filter = this.todosWithUsers.filter(todo =>
      `${todo.user.firstName} ${todo.user.lastName}`.toLowerCase().includes(lowerCaseFilter)
    );
  }
}
