import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  // https://newsapi.org/
  apiKey = '1a4234eaae844c379c126e872f4be2cc';

  constructor(private http: HttpClient) { }

  getNoticias(parametros:any): Observable<any>{
    // GET https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=1a4234eaae844c379c126e872f4be2cc

    const URL = `https://newsapi.org/v2/top-headlines?country=${parametros.pais}&category=${parametros.categoria}&apiKey=${this.apiKey}`;

    return this.http.get(URL);
  }
}
