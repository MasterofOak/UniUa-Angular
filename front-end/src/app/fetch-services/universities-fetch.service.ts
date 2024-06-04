import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { University } from '../university';

@Injectable({
  providedIn: 'root',
})
export class UniversitiesFetchService {
  constructor(private http: HttpClient) {}
  
  fetchUniInfo(query: string): Observable<University[]> {
    return this.http.get<University[]>(
      `https://uniua-backend-pmt7anowyq-lm.a.run.app/api/universities?name=${query}`
    );
  }
}
