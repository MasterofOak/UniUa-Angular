import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
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
  constructor(
    private responsive: BreakpointObserver
  ) {}
  galleryImgs: any = [
    {
      url: '/assets/gallery/gallery-img-1.jpg',
      alt: 'gallery-image',
    },
    {
      url: '/assets/gallery/gallery-img-2.jpg',
      alt: 'gallery-image',
    },
    {
      url: '/assets/gallery/gallery-img-3.jpg',
      alt: 'gallery-image',
    },
    {
      url: '/assets/gallery/gallery-img-4.jpg',
      alt: 'gallery-image',
    },
    {
      url: '/assets/university-1.jpg',
      alt: 'university',
    },
    {
      url: '/assets/university-2.jpg',
      alt: 'university',
    },
    {
      url: '/assets/students.jpg',
      alt: 'students',
    },
    {
      url: '/assets/university-3.jpg',
      alt: 'university',
    },
    {
      url: '/assets/student-life.jpg',
      alt: 'student-life',
    },
  ];
}
