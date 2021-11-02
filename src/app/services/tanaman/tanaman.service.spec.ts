import { TestBed } from '@angular/core/testing';

import { TanamanService } from './tanaman.service';

describe('TanamanService', () => {
  let service: TanamanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TanamanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
