import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Youtube } from '../models/youtube-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private url = 'https://www.googleapis.com/youtube/v3';
  private apikey = 'AIzaSyClm5FLIrINHhBoJv7HVZUBvSL-8k56Fes';
  private playlist = 'UUvnoM0R1sDKm-YCPifEso_g';
  private nextPag = '';

  constructor(private http: HttpClient) {}

  getVideos() {
    const url = `${this.url}/playlistItems`;
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('playlistId', this.playlist)
      .set('key', this.apikey)
      .set('pageToken', this.nextPag);
    return this.http
      .get<Youtube>(url, { params })
      .pipe(
        map((resp) => {
          this.nextPag = resp.nextPageToken;
          return resp.items;
        }),
        map((items) => {
          return items.map((video) => video.snippet);
        })
      );
  }
}
