import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/RX';

@Injectable()
export class SeriesService {

  constructor(private http: Http) {

  }

  private getAuthorizationHeader(): Headers {

    return new Headers(
      {
        'trakt-api-version': '2',
        'trakt-api-key': '1ba47e601d5db0b02965f703621db88aedc02390830d9cbad0edc357e03f47fd',
        'Content-Type': 'application/json'
      });
  }

  getSeries(page: number, count: number) {

    return this.http.get('https://api.trakt.tv/shows/popular?page=' + page + '&limit=' + count, {
      headers: this.getAuthorizationHeader()
    })
      .map(res => res.json())
      .catch(this.handleError);
  }

  getSerieDetail(slug: string) {

    return this.http.get('https://api.trakt.tv/shows/' + slug + '?extended=full', {
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
