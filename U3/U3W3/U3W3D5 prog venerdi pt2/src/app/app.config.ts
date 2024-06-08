import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [],
  providers: [],
})

export class AppConfigModule {}



export class AppModule { }

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};



