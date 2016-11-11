import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/RX';

@Injectable()
export class SeriesService {

  constructor(private http: Http) {

  }

  private getAuthorizationHeader(): Headers {

    return new Headers(
      {
        'trakt-api-version': '2',
        'trakt-api-key': environment.traktApiKey,
        'Content-Type': 'application/json'
      });
  }

  getSeries(page: number, count: number) {

    return this.http.get(environment.traktUrl + 'shows/popular?page=' + page + '&limit=' + count, {
      headers: this.getAuthorizationHeader()
    })
      .map(res => res.json())
      .catch(this.handleError);
  }

  getSerieDetail(slug: string) {

    return this.http.get(environment.traktUrl + 'shows/' + slug + '?extended=full', {
      headers: this.getAuthorizationHeader()
    })
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error(error);
    return Promise.reject(error);
  }
}
