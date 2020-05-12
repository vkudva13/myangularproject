import { TestBed } from '@angular/core/testing';

import { ServpsService as ServpsService } from './servps.service';

describe('ServbikeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServpsService = TestBed.get(ServpsService);
    expect(service).toBeTruthy();
  });
});
