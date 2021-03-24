import { TestBed } from '@angular/core/testing';

import { RegiformService } from './regiform.service';

describe('RegiformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegiformService = TestBed.get(RegiformService);
    expect(service).toBeTruthy();
  });
});
