import { Component, OnInit, Input } from '@angular/core';
import { Serie } from '../../../models/serie';

@Component({
  selector: 'app-serie-detail-content',
  templateUrl: './serie-detail-content.component.html',
  styleUrls: ['./serie-detail-content.component.css']
})
export class SerieDetailContentComponent implements OnInit {

  @Input()
  public serie: Serie;

  constructor() { }

  ngOnInit() {
  }

}
