import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SeriesService } from '../../services/series/series.service';
import { Serie } from '../../models/serie';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css'],
  providers: [
    SeriesService
  ]
})
export class SerieDetailComponent implements OnInit {

  serie: Serie = new Serie();

  constructor(
    private route: ActivatedRoute,
    private seriesService: SeriesService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let slug: string = params['slug'];
      this.getSerieDetail(slug);
    });
  }

  getSerieDetail(slug: string) {
    this.seriesService.getSerieDetail(slug)
      .subscribe(data => this.serie = new Serie(data), error => console.log(error));
  }
}
