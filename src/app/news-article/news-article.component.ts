import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css'],
})
export class NewsArticleComponent implements OnInit {
  isMobile: boolean = false;
  article: any;

  ngOnInit(): void {
    this.article = history.state.article;
    console.log(this.article);
    this.responsive
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result) => {
        if (result.matches) {
          this.isMobile = true;
        }
      });
  }
  constructor(private responsive: BreakpointObserver) {}
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
