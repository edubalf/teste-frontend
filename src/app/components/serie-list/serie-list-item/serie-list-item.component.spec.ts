/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SerieListItemComponent } from './serie-list-item.component';

describe('SerieListItemComponent', () => {
  let component: SerieListItemComponent;
  let fixture: ComponentFixture<SerieListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SerieListItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieListItemComponent);
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
`<a _ngcontent-a-1="" ng-reflect-href="/serie/slug-test" href="/serie/slug-test">
  <div _ngcontent-a-1="" class="card small z-depth-2 hoverable">
    <div _ngcontent-a-1="" class="card-image">
      <img _ngcontent-a-1="" ng-reflect-src="http://lorempixel.com/" src="http://lorempixel.com/">
    </div>
    <div _ngcontent-a-1="" class="card-content">
      <span _ngcontent-a-1="" class="card-title grey-text text-darken-4" style="font-size:15px;">title-test</span>
    </div>
  </div>
</a>`);

  });

});
