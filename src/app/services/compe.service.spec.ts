import { TestBed } from '@angular/core/testing';

import { CompeService } from './compe.service';

describe('CompeService', () => {
  let service: CompeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
