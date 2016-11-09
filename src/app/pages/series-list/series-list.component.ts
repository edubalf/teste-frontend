import { Component, OnInit } from '@angular/core';
import { Serie } from '../../models/serie';
import { SeriesService } from '../../services/series/series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css'],
  providers: [
    SeriesService
  ]
})

export class SeriesListComponent implements OnInit {

  series: Serie[];

  constructor(private seriesService: SeriesService) {

  }

  ngOnInit() {
    this.getSeries();
  }

  getSeries() {
    this.seriesService.getSeries(1, 20)
      .subscribe(data => this.series = data, error => console.log(error));
  }

}