import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api_key = '2146be8c';

@Injectable({ providedIn: 'root' })
export class HttpService {

  constructor(private http: HttpClient) {
  }


  getData(input) {

    return this.http.get(`http://www.omdbapi.com/?apikey=${api_key}&s=${input}`);

  }
}
