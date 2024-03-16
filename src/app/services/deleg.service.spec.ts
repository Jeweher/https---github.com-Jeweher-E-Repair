import { TestBed } from '@angular/core/testing';

import { delegService } from './deleg.service';

describe('DelegService', () => {
  let service: delegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(delegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
