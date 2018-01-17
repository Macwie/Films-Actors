import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.css']
})
export class EditFilmComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
  this.activatedRoute.queryParams.subscribe(params => {
        let date = params['id'];
        console.log(date); // Print the parameter to the console.
    });
}

  ngOnInit() {
  }

}
