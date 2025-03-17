import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColoresService {

  constructor(private http: HttpClient) { }

  getColores(query: string): Observable<any> {
    return this.http.get(`/api/palette/search?q=${query}`);
  }


}
