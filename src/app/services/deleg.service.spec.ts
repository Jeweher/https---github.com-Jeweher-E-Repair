import { TestBed } from '@angular/core/testing';

import { DelegService } from './deleg.service';

describe('DelegService', () => {
  let service: DelegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
