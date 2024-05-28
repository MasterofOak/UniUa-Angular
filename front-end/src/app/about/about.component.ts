import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  isMobile: boolean = false;
  constructor(private responsive: BreakpointObserver) {}
  ngOnInit(): void {
    this.responsive
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result) => {
        if (result.matches) {
          this.isMobile = true;
        }
      });
  }
}
