// app.routes.ts

import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ListComponentComponent } from './components/users/users.component';
import { UserProfileComponent } from './components/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';






export const routes: Routes = [


  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'users', component: ListComponentComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule // Aggiungi HttpClientModule agli imports
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
