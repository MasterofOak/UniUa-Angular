import { Component, OnInit } from '@angular/core';
import { News } from '../news';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css'],
})
export class NewsArticleComponent implements OnInit {
  ngOnInit(): void {
    this.article = history.state.article;
    console.log(this.article);
  }
  article: any;
  constructor() {}
  splitTextAndTitles(content: string) {
    const arr: string[] = content.split('\n');
    return arr;
  }
  isOdd(index: number) {
    return index % 2 !== 0 ? true : false;
  }
  formatDate(rawDate: string) {
    const date = new Date(rawDate);
    const formatedDate = `${date.toUTCString()}`;
    return formatedDate;
  }
}
