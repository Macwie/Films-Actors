import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Film } from '../../services/data.service'

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  constructor(private mydata:DataService) { }

  films:Film[];
  mem:Film[];

  ngOnInit() {
    this.mydata.getFilms().subscribe((dane) => this.films = dane);
  }

  remove(id) {
    this.mydata.removeFilm(id).subscribe((dane) => this.films = dane);
  }

  filter(title, actor, genre) {
    var temp = [];
    for(var i=0;i<this.films.length;i++) {
      if(title.length > 0 && this.films[i].title === title)
        temp.push(this.films[i]);
    }
    this.films = temp;
  }


}
