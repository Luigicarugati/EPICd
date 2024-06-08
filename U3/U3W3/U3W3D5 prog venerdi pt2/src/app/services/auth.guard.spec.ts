import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

describe('authGuard', () => {
   executeGuard: CanActivateFn = (route: ActivatedRouteSnapshot, _state: import("@angular/router").RouterStateSnapshot) =>
    TestBed.runInInjectionContext(() => new AuthGuard(route, new AuthService()));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
