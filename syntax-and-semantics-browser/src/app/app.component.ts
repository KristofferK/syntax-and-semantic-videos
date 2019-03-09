import { Component, OnInit } from '@angular/core';
import { ChannelService } from './channel.service';
import { YoutubeChannel } from './models/youtube-channel';
import { Playlist } from './models/playlist';
import { Episode } from './models/episode';
import { } from 'electron';
import * as cp from 'child_process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public channel: YoutubeChannel
  public playlist: Playlist;
  public episode: Episode;

  constructor(private channelService: ChannelService) {
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
    let isElectron: boolean = window && window['process'] && window['process'].type;

    if (isElectron) {
      let childInstance: typeof cp = window['require']('child_process');
      childInstance.exec(`"D:\\Program Files (x86)\\VideoLAN\\VLC\\vlc.exe" ${this.episode.url} --gain=64`);
    } else {
      alert('Only allowed in Electron');
    }
  }
}
