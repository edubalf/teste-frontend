import { Component, OnInit, Input } from '@angular/core';
import { Serie } from '../../../models/serie';

@Component({
  selector: '[app-serie-list-item]',
  templateUrl: './serie-list-item.component.html'
})
export class SerieListItemComponent implements OnInit {

  @Input()
  public serie: Serie;

  constructor() { }

  ngOnInit() {
  }

}
