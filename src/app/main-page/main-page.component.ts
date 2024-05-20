import { Component } from '@angular/core';
import { ImageSlider } from '../image-slider';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  imageSet: ImageSlider[] = [
    {
      url: '/assets/university-1.jpg',
      title: 'university',
    },
    {
      url: '/assets/university-2.jpg',
      title: 'university',
    },
    {
      url: '/assets/students.jpg',
      title: 'students',
    },
    {
      url: '/assets/university-3.jpg',
      title: 'university',
    },
    {
      url: '/assets/student-life.jpg',
      title: 'student-life',
    },
  ];

}
