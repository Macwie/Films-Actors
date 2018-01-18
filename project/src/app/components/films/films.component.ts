import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Film } from '../../services/data.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  constructor(private router: Router, private mydata: DataService) { }

  films: Film[];

  ngOnInit() {
    this.mydata.getFilms().subscribe((dane) => this.films = dane);
  }

  remove(id) {
    this.mydata.removeFilm(id).subscribe((dane) => this.films = dane);
  }

  filter(title, actor, genre) {
    var temp = [];
    console.log(genre);

    if (title) {    //sort by title
      for (var i = 0; i < this.films.length; i++) {
        if (this.films[i].title === title)
          temp.push(this.films[i]);
      }
    }

    if (actor) {    //sort by actor
      var split = actor.split(" ");
      for (var i = 0; i < this.films.length; i++) {
        for (var j = 0; j < this.films[i].actors.length; j++) {
          if (this.films[i].actors[j].name === split[0] &&
            this.films[i].actors[j].surname === split[1])
            temp.push(this.films[i]);
        }
      }
    }

    if (genre) {    //sort by genre
      for (var i = 0; i < this.films.length; i++) {
        if (this.films[i].genre === genre)
          temp.push(this.films[i]);
      }
    }

    this.films = temp;
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
