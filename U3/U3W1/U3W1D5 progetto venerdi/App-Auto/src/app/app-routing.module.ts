import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Brand1Component } from './pages/brand1/brand1.component';
import { Brand2Component } from './pages/brand2/brand2.component';
import { Brand3Component } from './pages/brand3/brand3.component';

const routes: Routes = [
  {
  path: '',
  redirectTo:'/home',
  pathMatch:'full',
},
{
  path:'home',
  component: HomeComponent,
  title: 'Home'
},
{
  path:'audi',
  component: Brand1Component,
  title: 'Audi'
},
{
  path:'fiat',
  component: Brand2Component,
  title: 'Fiat'
},
{
  path:'ford',
  component: Brand3Component,
  title: 'Ford'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
