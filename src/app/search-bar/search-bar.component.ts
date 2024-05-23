import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Input() isMobile:boolean = false
  constructor(private router: Router) {}

  getData(e: Event, input: string) {
    e.preventDefault();
    if (input) {
      this.router.navigate(['results'], { queryParams: { query: input } });
    }
  }
}
