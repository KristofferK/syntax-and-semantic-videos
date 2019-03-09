import { Component, OnInit } from '@angular/core';
import { ChannelService } from './channel.service';
import { YoutubeChannel } from './models/youtube-channel';
import { Playlist } from './models/playlist';
import { Episode } from './models/episode';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public channel: YoutubeChannel
  public playlist: Playlist;
  public episode: Episode;

  constructor(private channelService: ChannelService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.channelService.getChannel().subscribe(e => {
      this.channel = e;
      this.setPlaylist(this.channel.playlists[0]);
    });
  }

  public setPlaylist(playlist: Playlist) {
    this.playlist = playlist;
    this.episode = playlist.episodes[0];
  }

  public setEpisode(episode: Episode) {
    this.episode = episode;
  }

  public openInVLC(episode: Episode) {
    alert('Not yet supported');
  }
}
