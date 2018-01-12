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
}

@Injectable()
export class DataService {

  constructor(private http:HttpClient) {
    console.log("Ready...")
 }

 cars = [
    'Ford','Chevrolet','Buick'
  ];

 getFilms():Observable<Film[]> {
   //console.log(this.http.get('http://localhost:3000/films'));
   return this.http.get<Film[]>('http://localhost:3000/films');
 }

}
