import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YoutubeChannel } from './models/youtube-channel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  constructor(private http: HttpClient) {

  }

  public getChannel(): Observable<YoutubeChannel> {
    return this.http.get<YoutubeChannel>('assets/channel.json', { responseType: 'json' });
  }
}
