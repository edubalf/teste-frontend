/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RatingFormat } from '../../../pipes/serie-detail/serie-detail.pipe';

import { SerieDetailContentComponent } from './serie-detail-content.component';

describe('SerieDetailContentComponent', () => {
  let component: SerieDetailContentComponent;
  let fixture: ComponentFixture<SerieDetailContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SerieDetailContentComponent,
        RatingFormat 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieDetailContentComponent);
    fixture.componentInstance.serie = {
      ids: {
        slug: 'slug-test'
      },
      image: 'image-test',
      overview: 'overview-test',
      rating: 6.345345,
      thumb: 'http://lorempixel.com/',
      title: 'title-test'
    };
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('html render', () => {
    expect(fixture.nativeElement.innerHTML).toEqual(
`<div _ngcontent-a-1="" class="row">
  <div _ngcontent-a-1="" class="col s12 m4 l4 center-align">
    <img _ngcontent-a-1="" class="responsive-img z-depth-3" ng-reflect-src="http://lorempixel.com/" src="http://lorempixel.com/">
  </div>
  <div _ngcontent-a-1="" class="col s12 m8 l8">
    <h4 _ngcontent-a-1="">title-test<span _ngcontent-a-1="" class="right"><i _ngcontent-a-1="" class="material-icons">star</i>6.3</span></h4>
    <p _ngcontent-a-1="">overview-test</p>
  </div>
</div>`)
  });
});
