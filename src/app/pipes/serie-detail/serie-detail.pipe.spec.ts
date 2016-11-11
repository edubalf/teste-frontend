/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RatingFormat } from './serie-detail.pipe';

describe('Pipe: SerieDetail', () => {
  it('create an instance', () => {
    let pipe = new RatingFormat();
    expect(pipe).toBeTruthy();
  });

  it('6.472 to 6.5', () => {
    let pipe = new RatingFormat();
    expect(pipe.transform(6.472)).toEqual(6.5);
  });

});
