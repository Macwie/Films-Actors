import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Actor } from '../../services/data.service'

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  constructor(private mydata:DataService) { }

  actors:Actor[];

  ngOnInit() {
    this.mydata.getActors().subscribe((dane) => this.actors = dane);
  }

}
