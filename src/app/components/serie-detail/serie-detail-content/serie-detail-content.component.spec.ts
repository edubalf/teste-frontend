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
    expect(fixture.nativeElement.innerHTML).toContain(component.serie.title);
    expect(fixture.nativeElement.innerHTML).toContain(component.serie.thumb);
    expect(fixture.nativeElement.innerHTML).toContain(component.serie.overview);
    expect(fixture.nativeElement.innerHTML).toContain('6.3');
  });
});
