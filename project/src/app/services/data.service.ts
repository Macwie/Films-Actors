import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface Film {
  id: string;
  title: string;
  year: string;
  country: string;
  director: string;
  image: string;
  genre: string;
  actors: string[];
}

export interface Connector {
  filmId: string;
  actorId: string;
}

export interface Actor {
  id: string;
  name: string;
  surname: string;
  birth: string;
  image: string;
  height: string;
  prizes: string[];
  films: string[];
}

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {
    console.log("Ready...")
  }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>('http://localhost:3000/films');
  }

  removeFilm(id): Observable<Film[]> {
    return this.http.delete<Film[]>('http://localhost:3000/films/' + id);
  }

  getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>('http://localhost:3000/actors');
  }

  removeActor(id): Observable<Actor[]> {
    return this.http.delete<Actor[]>('http://localhost:3000/actors/' + id);
  }


}
