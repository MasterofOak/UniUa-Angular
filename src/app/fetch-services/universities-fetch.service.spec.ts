import { TestBed } from '@angular/core/testing';

import { UniversitiesFetchService } from './universities-fetch.service';

describe('UniversitiesFetchService', () => {
  let service: UniversitiesFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversitiesFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
