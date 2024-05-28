import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../news';

@Component({
  selector: 'app-trending-news',
  templateUrl: './trending-news.component.html',
  styleUrls: ['./trending-news.component.css'],
})
export class TrendingNewsComponent {
  @Input() newsData: News[] = [];
  @Input() isMobile: boolean = false;
  constructor(private router: Router) {}

  showMore(article: News) {
    console.log(article);
    const articleTitle = article.title.slice(0, -4);
    const newsRoute = articleTitle.split(' ').join('-');
    this.router.navigate([`/news/${newsRoute}`], {
      state: { article: article },
    });
  }
}
