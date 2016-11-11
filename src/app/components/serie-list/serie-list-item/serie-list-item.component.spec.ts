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
    expect(fixture.nativeElement.innerHTML).toContain(component.serie.ids.slug);
    expect(fixture.nativeElement.innerHTML).toContain(component.serie.thumb);
    expect(fixture.nativeElement.innerHTML).toContain(component.serie.title);
  });

});
