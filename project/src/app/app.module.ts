import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FilmsComponent } from './components/films/films.component';
import { ActorsComponent } from './components/actors/actors.component';


const appRoutes = [
 { path: '', component:FilmsComponent },
 { path: 'actors', component:ActorsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    ActorsComponent
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
