import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Film } from '../../services/data.service'

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {

  constructor(private mydata: DataService) { }

  ngOnInit() {
  }

}
