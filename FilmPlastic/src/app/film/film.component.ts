import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../Film';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @Input() film: Film;
  constructor() { }

  ngOnInit() {
  }

}
