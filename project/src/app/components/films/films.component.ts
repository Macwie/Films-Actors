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
  test:string;
  cars:any;

  ngOnInit() {
    this.test = "test";
    this.cars = this.mydata.cars;
    this.mydata.getFilms().subscribe((dane) => this.films = dane);
  }


}
