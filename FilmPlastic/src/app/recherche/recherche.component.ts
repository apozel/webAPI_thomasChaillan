import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { startWith, debounceTime } from 'rxjs/operators';
import { Film } from '../Film';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  myControl = new FormControl();
  filmListeResultat: Film[] = [];

  ngOnInit() {
    const observeur = this.myControl.valueChanges
      .pipe(
        debounceTime(1000),
      ).subscribe(value => {
        console.log('observeur : ' + value);
      });

  }

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
  }


  requestHttp(value?: string) {
    const urlRecherche = 'http://www.omdbapi.com/?apikey=2146be8c&s=' + value;
    console.log(urlRecherche);
    this.http
      .get<any>(urlRecherche)
      .subscribe(data => {
        console.log('data rep : ' + data.Response);
        console.log(data);
        if (data.Response === 'True') {
          const resultat: Film[] = data.Search;
          this.filmListeResultat = resultat;
        } else {
          console.log('pas bon resultat');
          const snackBarRef = this.snackBar.open('Pas de resultat !');
        }

      });
  }
  Submit() {
    console.log('submit');
    this.requestHttp(this.myControl.value);
  }


}
