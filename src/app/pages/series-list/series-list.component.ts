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

  series: Serie[] = [];

  page: number = 1;

  constructor(private seriesService: SeriesService) {

  }

  loadMoreSeries(event) {
    this.getSeries();
  }

  ngOnInit() {
    this.getSeries();
  }

  getSeries() {

    this.seriesService.getSeries(this.page, 12)
      .subscribe((data) => {

        Array.from(data).forEach(function (serie: Serie) {
          serie.thumb = 'http://lorempixel.com/300/400/';
        });

        this.series = this.series.concat(data);

      }, error => console.log(error));

    this.page++;
  }

}
