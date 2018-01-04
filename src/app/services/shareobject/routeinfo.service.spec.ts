import { TestBed, inject } from '@angular/core/testing';

import { RouteinfoService } from './routeinfo.service';

describe('RouteinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteinfoService]
    });
  });

  it('should be created', inject([RouteinfoService], (service: RouteinfoService) => {
    expect(service).toBeTruthy();
  }));
});
