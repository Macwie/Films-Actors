import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../services/data.service'
import { Actor } from '../../services/data.service'
import { filmDummy } from '../../services/data.service'
import { NgForm } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private mydata: DataService) {}

  index: string;
  actor: Actor;
  films: filmDummy[];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = params['id'];
    });
    this.mydata.getActor(this.index).subscribe((dane) => this.actor = dane);
    this.mydata.getFilms().subscribe((dane) => this.films = dane);
  }

  editActor(form: NgForm) {
    console.log(form.controls['name'].value);
    console.log(form.controls['films'].value);
    //console.log(this.films);
    console.log(form.controls['surname'].value);
    console.log(form.controls['birth'].value);
    console.log(form.controls['image'].value);
    console.log(form.controls['height'].value);
    console.log(form.controls['prizes'].value);
    console.log(form.controls['prizes'].value instanceof Array);

    if(form.controls['prizes'].value instanceof Array){

      this.actor = {id: "0", name: form.controls['name'].value, surname: form.controls['surname'].value,
       birth: form.controls['birth'].value, image: form.controls['image'].value,
        height: form.controls['height'].value, prizes: form.controls['prizes'].value,
        films: form.controls['films'].value};

    } else {

      var split = form.controls['prizes'].value.split(",");
      var prizesSplitted = [];

      for (var i=0;i<split.length;i++) {
        prizesSplitted.push(split[i]);
      }

      this.actor = {id: "0", name: form.controls['name'].value, surname: form.controls['surname'].value,
       birth: form.controls['birth'].value, image: form.controls['image'].value,
        height: form.controls['height'].value, prizes: prizesSplitted,
        films: form.controls['films'].value};

    }

      this.mydata.editActor(this.actor, this.index).subscribe();
  }

}
