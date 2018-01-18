import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../services/data.service'
import { Actor } from '../../services/data.service'
import { actorDummy } from '../../services/data.service'
import { NgForm } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.css']
})
export class EditFilmComponent implements OnInit {

  constructor(private route: ActivatedRoute, private mydata: DataService) {}

  index: string;
  film: Film;
  actors: actorDummy[];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = params['id'];
    });
    this.mydata.getFilm(this.index).subscribe((dane) => this.film = dane);
    this.mydata.getActors().subscribe((dane) => this.actors = dane);
  }

  editFilm(form: NgForm) {
    console.log(form.controls['title'].value);
    console.log(form.controls['actors'].value);
    console.log(form.controls['country'].value);
    console.log(form.controls['year'].value);
    console.log(form.controls['director'].value);
    console.log(form.controls['image'].value);
    console.log(form.controls['genre'].value);

    this.film = {id: "0", title: form.controls['title'].value, year: form.controls['year'].value,
     country: form.controls['country'].value, director: form.controls['director'].value,
      image: form.controls['image'].value, genre: form.controls['genre'].value,
       actors: form.controls['actors'].value};

    this.mydata.editFilm(this.film, this.index).subscribe();
  }

}
