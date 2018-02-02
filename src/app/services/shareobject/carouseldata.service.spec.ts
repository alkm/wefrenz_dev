import { TestBed, inject } from '@angular/core/testing';

import { CarouseldataService } from './carouseldata.service';

describe('CarouseldataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarouseldataService]
    });
  });

  it('should be created', inject([CarouseldataService], (service: CarouseldataService) => {
    expect(service).toBeTruthy();
  }));
});
