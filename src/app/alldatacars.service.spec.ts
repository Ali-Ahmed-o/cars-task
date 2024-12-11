import { TestBed } from '@angular/core/testing';

import { AlldatacarsService } from './service/alldatacars.service';

describe('AlldatacarsService', () => {
  let service: AlldatacarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlldatacarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
