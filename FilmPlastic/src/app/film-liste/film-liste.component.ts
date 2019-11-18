import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../Film';

@Component({
  selector: 'app-film-liste',
  templateUrl: './film-liste.component.html',
  styleUrls: ['./film-liste.component.css']
})
export class FilmListeComponent implements OnInit {

  filmListe: Film;

  constructor(private http: HttpClient) {
    http
      .get<Film>('http://www.omdbapi.com/?apikey=2146be8c&t=titanic')
      .subscribe(data => { this.filmListe = data; });
  }
  ngOnInit() {
  }

}
