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
    return this.http.get<News[]>('http://localhost:5000/api/news');
  }
}
