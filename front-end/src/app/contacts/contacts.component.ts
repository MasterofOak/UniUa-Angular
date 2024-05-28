import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
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
