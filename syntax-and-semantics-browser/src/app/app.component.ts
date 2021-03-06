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
    this.exec(`vlc ${this.episode.url} --gain=64 --rate 1.225`);
  }

  public openPlaylistInVLC(playlist: Playlist) {
    let episodes = '';
    playlist.episodes.forEach(e => {
      episodes += ' "' + e.url + '"';
    })
    console.log(episodes);
    this.exec(`vlc ${episodes} --gain=64 --rate 1.225`);
  }

  private exec(command: string) {
    let isElectron: boolean = window && window['process'] && window['process'].type;

    if (isElectron) {
      let childInstance: typeof cp = window['require']('child_process');
      childInstance.exec(command);
    } else {
      alert('Only allowed in Electron');
    }
  }
}
