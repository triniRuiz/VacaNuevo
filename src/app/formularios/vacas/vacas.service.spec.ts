import { TestBed } from '@angular/core/testing';

import { VacasService } from './vacas.service';

describe('VacasService', () => {
  let service: VacasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
