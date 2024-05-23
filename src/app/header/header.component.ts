import { Component, Input } from '@angular/core';
import { NewsFetchService } from '../fetch-services/news-fetch.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() isMobile: boolean = false;
  isNavOpen: boolean = false;
  constructor(private NewsService: NewsFetchService) {}
  getNews() {
    return this.NewsService.fetchNewsInfo().subscribe((data) =>
      console.log(data)
    );
  }
  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
    console.log(this.isNavOpen);
  }
}
