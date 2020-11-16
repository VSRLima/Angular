import { TestBed } from '@angular/core/testing';

import { ServicesCursoService } from './services-curso.service';

describe('ServicesCursoService', () => {
  let service: ServicesCursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
