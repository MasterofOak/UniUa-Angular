import { Component, OnInit } from '@angular/core';
import { NewsFetchService } from '../fetch-services/news-fetch.service';
import { News } from '../news';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  fetchedNews: News[] = [];
  isMobile: boolean = false;
  constructor(
    private NewsFetch: NewsFetchService,
    private responsive: BreakpointObserver
  ) {}
  ngOnInit(): void {
    this.NewsFetch.fetchNewsInfo().subscribe((data) => {
      this.fetchedNews = data;
      console.log(this.fetchedNews);
    });
    this.responsive
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result) => {
        if (result.matches) {
          this.isMobile = true;
        }
      });
  }
}
