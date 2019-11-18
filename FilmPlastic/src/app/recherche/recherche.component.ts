import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Film } from '../Film';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  myControl = new FormControl();
  options: Film[] = [];

  filteredOptions: Observable<Film[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.Title),
        map(Title => Title ? this._filter(Title) : this.options.slice())

      );
    console.log(this.filteredOptions);
  }

  displayFn(film?: Film): string | undefined {
    return film ? film.Title : undefined;
  }

  private _filter(Title: string): Film[] {
    const filterValue = Title.toLowerCase();

    return this.options.filter(option => option.Title.toLowerCase().indexOf(filterValue) === 0);
  }
}
