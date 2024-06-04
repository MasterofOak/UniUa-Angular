import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../news';

@Injectable({
  providedIn: 'root',
})
export class NewsFetchService {
  constructor(private http: HttpClient) {}

  fetchNewsInfo(): Observable<News[]> {
    return this.http.get<News[]>('https://uniua-backend-pmt7anowyq-lm.a.run.app/api/news');
  }
}
