/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SeriesService } from './series.service';

describe('Service: Series', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeriesService]
    });
  });

  it('Buscar series', inject([SeriesService], (service: SeriesService) => {
    //expect(service.getSeries(1,10))
  }));
});
