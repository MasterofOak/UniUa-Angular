import { Component } from '@angular/core';
import { NewsFetchService } from '../fetch-services/news-fetch.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private NewsService: NewsFetchService) {}
  getNews() {
    return this.NewsService.fetchNewsInfo().subscribe((data) =>
      console.log(data)
    );
  }
}
