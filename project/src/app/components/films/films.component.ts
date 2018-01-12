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

  ngOnInit() {
    this.mydata.getFilms().subscribe((dane) => this.films = dane);
  }


}
