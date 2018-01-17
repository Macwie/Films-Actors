import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Film } from '../../services/data.service'
import { Actor } from '../../services/data.service'
import { actorDummy } from '../../services/data.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {

  constructor(private mydata: DataService) { }

  actors: actorDummy[];
  actor: actorDummy;
  country: string;
  title: string;
  year: string;
  director: string;
  image: string;
  genre: string;
  film: Film;
  ngOnInit() {
    this.mydata.getActors().subscribe((dane) => this.actors = dane);
  }

  addFilm(form: NgForm) {
    console.log(form.controls['actors'].value);
    console.log(form.controls['country'].value);
    console.log(form.controls['title'].value);
    console.log(form.controls['year'].value);
    console.log(form.controls['director'].value);
    console.log(form.controls['image'].value);
    console.log(form.controls['genre'].value);

    console.log(this.actors[1].id);
    console.log(this.actors[1].name);
    console.log(this.actors[1].surname);

    this.film = {id: "0", title: this.title, year: this.year, country: this.country, director: this.director, image: this.image, genre: this.genre, actors: this.actors};
    this.mydata.addFilm(this.film).subscribe();
  }




  sortFilmByYear(){
    this.films.sort(function(a, b){
    var FilmA=a.year.toLowerCase(), FilmB=b.year.toLowerCase()
    if (FilmA < FilmB) //sort string ascending
        return -1
    if (FilmA > FilmB)
        return 1
    return 0 //default return value (no sorting)
  })
  }

  sortFilmByTitle(){
    this.films.sort(function(a, b){
    var FilmA=a.title.toLowerCase(), FilmB=b.title.toLowerCase()
    if (FilmA < FilmB) //sort string ascending
        return -1
    if (FilmA > FilmB)
        return 1
    return 0 //default return value (no sorting)
  })
  }

}
