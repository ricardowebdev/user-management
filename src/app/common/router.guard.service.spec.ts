import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

describe('Router.GuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Router.GuardService = TestBed.get(AuthGuard);
    expect(service).toBeTruthy();
  });
});
