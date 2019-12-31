import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchService {


  public apiKey = 'AIzaSyA1VrbeMk7_4D0pftZk1cgbyzLOBAZww_g';

  constructor(public http: HttpClient) { }

    public getVideosForChanel(id: string[]): Observable<Object> {
    const movieId = 'SSViT336Vq4';
    const url = 'https://www.googleapis.com/youtube/v3/videos?part=id,snippet&' +
                'id=' + movieId +
                '&key=' + this.apiKey;

    return this.http.get(url);
  }
}
