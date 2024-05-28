import { Component, OnInit } from '@angular/core';
import { UniversitiesFetchService } from '../fetch-services/universities-fetch.service';
import { University } from '../university';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  fetchedData: University[] = [];
  constructor(
    private UniversityService: UniversitiesFetchService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const query = params['query'];
      this.getUni(query);
    });
  }
  getUni(query: string): void {
    this.UniversityService.fetchUniInfo(query).subscribe((data) => {
      this.fetchedData = data;
    });
  }
  returnImage(base64: string): string {
    return `data:image/png;base64,${base64}`;
  }
}
