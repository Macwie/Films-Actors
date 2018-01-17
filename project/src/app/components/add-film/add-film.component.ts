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
    console.log(this.actors);
    console.log(form.controls['country'].value);
    console.log(form.controls['title'].value);
    console.log(form.controls['year'].value);
    console.log(form.controls['director'].value);
    console.log(form.controls['image'].value);
    console.log(form.controls['genre'].value);

    console.log(this.actors[1].id);
    console.log(this.actors[1].name);
    console.log(this.actors[1].surname);

    this.film = {id: "0", title: this.title, year: this.year, country: this.country, director: this.director, image: this.image, genre: this.genre, actors: form.controls['actors'].value};
    this.mydata.addFilm(this.film).subscribe();
  }


}
