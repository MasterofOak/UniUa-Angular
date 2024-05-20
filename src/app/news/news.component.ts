import { Component, OnInit } from '@angular/core';
import { NewsFetchService } from '../fetch-services/news-fetch.service';
import { News } from '../news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  fetchedNews: News[] = [];
  constructor(private NewsFetch: NewsFetchService) {}
  ngOnInit(): void {
    this.NewsFetch.fetchNewsInfo().subscribe((data) => {
      this.fetchedNews = data;
      console.log(this.fetchedNews);
    });
  }
}
