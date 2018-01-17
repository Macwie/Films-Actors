import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Film } from '../../services/data.service'
import { Actor } from '../../services/data.service'
import { filmDummy } from '../../services/data.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css']
})
export class AddActorComponent implements OnInit {

  constructor(private mydata: DataService) { }

  films: filmDummy[];
  film: filmDummy;
  name: string;
  surname: string;
  birth: string;
  image: string;
  height: string;
  prizes: string;
  actor: Actor;

  ngOnInit() {
    this.mydata.getFilms().subscribe((dane) => this.films = dane);
  }

  addActor(form: NgForm) {

    console.log(form.controls['films'].value);
    console.log(this.films);
    console.log(form.controls['name'].value);
    console.log(form.controls['surname'].value);
    console.log(form.controls['birth'].value);
    console.log(form.controls['image'].value);
    console.log(form.controls['height'].value);
    console.log(form.controls['prizes'].value);

    var split = this.prizes.split("\n");
    var prizesSplitted = [];

    for (var i=0;i<split.length;i++) {
      prizesSplitted.push(split[i]);
    }

    this.actor = {id: "0", name: this.name, surname: this.surname, birth: this.birth, image: this.image, height: this.height, prizes: prizesSplitted, films: form.controls['films'].value};
    this.mydata.addActor(this.actor).subscribe();

  }

}
