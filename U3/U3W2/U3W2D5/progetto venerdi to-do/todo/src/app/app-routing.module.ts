

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { completCompon } from './pages/completed/completed.component';
import { TdsComp } from './pages/todos/todos.component';
import { Page404Component } from './pages/page404/page404.component';
import { UsersComponent } from './pages/users/users.component';

    const routes: Routes = [
     {
        path: '',
        component: TdsComp,
        pathMatch: 'full'
     },
     {
        path: 'completed',
        component: completCompon
     },
     {
       path: 'users',
       component: UsersComponent
     },
     {
         path: '**',
        component: Page404Component
     }
    ];

           @NgModule({

            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
            })


export class AppRoutingModule { }
