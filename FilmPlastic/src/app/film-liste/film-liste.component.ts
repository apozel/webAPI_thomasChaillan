import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../Film';

@Component({
  selector: 'app-film-liste',
  templateUrl: './film-liste.component.html',
  styleUrls: ['./film-liste.component.css']
})
export class FilmListeComponent implements OnInit {

  @Input() filmListe: Film[] = [];

  ngOnInit() {
  }

}
