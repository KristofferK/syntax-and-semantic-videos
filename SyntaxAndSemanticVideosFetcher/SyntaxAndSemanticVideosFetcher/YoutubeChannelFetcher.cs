using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;

namespace SyntaxAndSemanticVideosFetcher
{
    internal class YoutubeChannelFetcher
    {
        public Channel GetChannel()
        {
            return new Channel()
            {
                Playlists = GetPlaylistLinks().Select(e => new PlaylistWithEpisodes()
                {
                    PlaylistLink = e,
                    Episodes = GetEpisodes(e)
                })
            };
        }

        private static IEnumerable<PlaylistLink> GetPlaylistLinks()
        {
            return ReadSource("https://www.youtube.com/channel/UCCiXT1k2RN37TrjekAqb09Q/playlists")
                .Split("<li class=\"channels-content-item yt-shelf-grid-item\">")
                .Skip(1)
                .Select(e => new PlaylistLink()
                {
                    Title = e.InBetween("dir=\"ltr\" title=\"", "\""),
                    Url = "https://www.youtube.com/watch?v=" + WebUtility.HtmlDecode(e.InBetween(" <a href=\"/watch?v=", "\"")),
                })
                .Where(e => e.Title.Contains("Syntaks"))
                .OrderBy(e => int.Parse(e.Title.Split(' ').Last()));
        }

        private static IEnumerable<Episode> GetEpisodes(PlaylistLink playlistLink)
        {
            return ReadSource(playlistLink.Url)
                .Split("<li")
                .Skip(1)
                .Select(e => e.Split('>')[0])
                .Where(e => e.Contains("data-video-title"))
                .Select(e => new Episode()
                {
                    Title = e.InBetween("data-video-title=\"", "\""),
                    Url = "https://www.youtube.com/watch?v=" + e.InBetween("data-video-id=\"", "\"")
                });
        }

        private static string ReadSource(string s)
        {
            using (var wc = new WebClient())
            {
                return wc.DownloadString(s);
            }
        }
    }
}
