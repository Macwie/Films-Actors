import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Film } from '../../services/data.service'
import { Actor } from '../../services/data.service'

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {

  constructor(private mydata: DataService) { }

  actors: Actor[];
  film: Film;

  ngOnInit() {
    this.mydata.getActors().subscribe((dane) => this.actors = dane);
  }

  addFilm(event) {
    console.log(event.target.aktorzy.value);
    //this.film = {id: "0", title: title, year: year, country: country, director: director, image: image, genre: genre, actors: actors};
    //this.mydata.addFilm(this.film).subscribe();
  }

}
