import {TestBed} from '@angular/core/testing';

import {StandortServiceService} from './standort-service.service';

describe('StandortServiceService', () => {
  let service: StandortServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StandortServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
