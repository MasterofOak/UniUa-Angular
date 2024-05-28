import { Component, OnInit } from '@angular/core';
import { ImageSlider } from '../image-slider';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  isMobile: boolean = false;
  ngOnInit(): void {
    this.responsive
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result) => {
        if (result.matches) {
          this.isMobile = true;
        }
      });
  }
  constructor(private responsive: BreakpointObserver) {}
  imageSet: ImageSlider[] = [
    {
      url: 'assets/university-1.jpg',
      title: 'university',
    },
    {
      url: 'assets/university-2.jpg',
      title: 'university',
    },
    {
      url: 'assets/students.jpg',
      title: 'students',
    },
    {
      url: 'assets/university-3.jpg',
      title: 'university',
    },
    {
      url: 'assets/student-life.jpg',
      title: 'student-life',
    },
  ];
}
