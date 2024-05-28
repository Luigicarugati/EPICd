import { TestBed } from '@angular/core/testing';

import { AutofetchService } from './autofetch.service';

describe('AutofetchService', () => {
  let service: AutofetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutofetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
