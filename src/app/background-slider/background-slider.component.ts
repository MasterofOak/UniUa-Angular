import { Component, Input, OnDestroy } from '@angular/core';
import { ImageSlider } from '../image-slider';

@Component({
  selector: 'app-background-slider',
  templateUrl: './background-slider.component.html',
  styleUrls: ['./background-slider.component.css'],
})
export class BackgroundSliderComponent implements OnDestroy {
  @Input() imageSet: ImageSlider[] = [];
  ngOnDestroy(): void {
    clearInterval(this.slideShow);
  }

  currentIndex: number = 0;
  slideShow = setInterval(() => this.setSlideShow(), 5000);

  getCurrentImage(): string {
    return `url('${this.imageSet[this.currentIndex].url}')`;
  }
  setSlideShow() {
    this.setNextImage();
  }
  setNextImage(): number {
    const isLast: boolean = this.currentIndex === this.imageSet.length - 1;
    return isLast
      ? (this.currentIndex = 0)
      : (this.currentIndex = this.currentIndex + 1);
  }
}
