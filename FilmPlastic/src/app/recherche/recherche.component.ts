import { Component, OnInit } from '@angular/core';
import { Film } from '../Film';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})

export class RechercheComponent implements OnInit {

  resultatHttp: any;
  resultatFilm: Film[];

  ngOnInit() {
  }

  constructor(private http: HttpService, private snackBar: MatSnackBar) {
  }

  async demandeRecherche(e) {
    console.log(e.target.value);
    this.resultatHttp = await this.http.getData(e.target.value).toPromise();
    if (this.resultatHttp.Response === 'True') {
      this.resultatFilm = this.resultatHttp.Search;
    } else {
      console.log('pas bon resultat');
      this.snackBar.open('Pas de resultat !');
    }
  }
}


