

import { Component, OnInit } from '@angular/core';
import { iTodowithuser } from '../../Models/todowithuser';
import { TodoService } from '../../todo.service';



        @Component({
            selector: 'app-completed',
            templateUrl: './completed.component.html',
            styleUrl: './completed.component.scss'
        })




        export class completCompon implements OnInit {

                          completed: iTodowithuser[] = [];

                                 constructor( private todoSvc: TodoService) { }

                                                           ngOnInit(): void {
                                                                           this.completed = this.todoSvc.getCompletedTodos();
                    }

                  }
