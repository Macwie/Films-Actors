import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FilmsComponent } from './components/films/films.component';
import { ActorsComponent } from './components/actors/actors.component';
import { AddFilmComponent } from './components/add-film/add-film.component';
import { AddActorComponent } from './components/add-actor/add-actor.component';
import { EditFilmComponent } from './components/edit-film/edit-film.component';
import { EditActorComponent } from './components/edit-actor/edit-actor.component';


const appRoutes = [
 { path: '', component:FilmsComponent },
 { path: 'actors', component:ActorsComponent },
 { path: 'add_film', component:AddFilmComponent },
 { path: 'add_actor', component:AddActorComponent },
 { path: 'edit_actor/:id', component:EditActorComponent },
 { path: 'edit_film/:id', component:EditFilmComponent }


]

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    ActorsComponent,
    AddFilmComponent,
    AddActorComponent,
    EditFilmComponent,
    EditActorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
