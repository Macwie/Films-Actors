import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Actor } from '../../services/data.service'

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  constructor(private mydata: DataService) { }

  actors: Actor[];

  ngOnInit() {
    this.mydata.getActors().subscribe((dane) => this.actors = dane);
  }

  remove(id) {
    this.mydata.removeActor(id).subscribe((dane) => this.actors = dane);
  }

  filter(actor, film) {
    var temp = [];

    if (actor) {    //sort by actor
      var split = actor.split(" ");
      for (var i = 0; i < this.actors.length; i++) {
        if (this.actors[i].name === split[0] && this.actors[i].surname === split[1]) {
          temp.push(this.actors[i]);
        }
      }
    }

    if (film) {    //sort by film
      for (var i = 0; i < this.actors.length; i++) {
        for (var j = 0; j < this.actors[i].films.length; j++) {
          if (this.actors[i].films[j].title === film)
            temp.push(this.actors[i]);
        }
      }
    }
    this.actors = temp;

  }

}
