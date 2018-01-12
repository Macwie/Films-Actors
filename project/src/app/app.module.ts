import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FilmsComponent } from './components/films/films.component';
import { ActorsComponent } from './components/actors/actors.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    ActorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
