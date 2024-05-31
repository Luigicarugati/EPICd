import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { completCompon } from './pages/completed/completed.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './main-components/navbar/navbar.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { Page404Component } from './pages/page404/page404.component';
import { TdsComp } from './pages/todos/todos.component';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TdsComp,
    AppComponent,
    completCompon,
    NavbarComponent,
    FooterComponent,
    UsersComponent,
    Page404Component
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
