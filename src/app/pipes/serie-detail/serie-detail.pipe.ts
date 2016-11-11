import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingFormat'
})

export class RatingFormat implements PipeTransform {

  transform(value: any, args?: any): any {
    return Math.round(value * 10) / 10;
  }

}
