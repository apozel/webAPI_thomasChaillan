import { Component, OnInit } from '@angular/core';
import { Film } from '../Film';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-filmdetaille',
  templateUrl: './filmdetaille.component.html',
  styleUrls: ['./filmdetaille.component.css']
})
export class FilmdetailleComponent implements OnInit {

  filmAfficher: Film;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('imdbID');
      this.http.get<Film>(`http://www.omdbapi.com/?apikey=2146be8c&i=${id}`)
        .subscribe(data => {
          this.filmAfficher = data;
          this.filmAfficher.Genre = this.filmAfficher.Genre[0].split(", ");
          console.log(this.filmAfficher);
        });
    });

  }
}
