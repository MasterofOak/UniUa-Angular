import { Component, Input } from '@angular/core';
import { News } from '../news';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-slider',
  templateUrl: './news-slider.component.html',
  styleUrls: ['./news-slider.component.css'],
})
export class NewsSliderComponent {
  @Input() lastNews: any[] = [];
  @Input() isMobile: boolean = false;
  constructor(private router: Router) {}
  currentIndex: number = 0;
  goRight(slider: Element): void {
    if (this.isMobile) {
      slider.scrollLeft += 350;
      return;
    }
    slider.scrollLeft += 1000;
  }
  goLeft(slider: Element): void {
    if (this.isMobile) {
      slider.scrollLeft -= 350;
      return;
    }
    slider.scrollLeft -= 1000;
  }
  showMore(article: News) {
    console.log(article);
    const articleTitle = article.title.slice(0, -4);
    const newsRoute = articleTitle.split(' ').join('-');
    this.router.navigate([`/news/${newsRoute}`], {
      state: { article: article },
    });
  }
}
