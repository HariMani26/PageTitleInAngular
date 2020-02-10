import { TestBed } from '@angular/core/testing';

import { TittleServiceService } from './tittle-service.service';

describe('TittleServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TittleServiceService = TestBed.get(TittleServiceService);
    expect(service).toBeTruthy();
  });
});
