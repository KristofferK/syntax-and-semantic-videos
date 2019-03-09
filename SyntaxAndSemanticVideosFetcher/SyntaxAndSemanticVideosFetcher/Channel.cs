using System;
using System.Collections.Generic;
using System.Text;

namespace SyntaxAndSemanticVideosFetcher
{
    public class Channel
    {
        public IEnumerable<PlaylistWithEpisodes> Playlists { get; set; }
    }
}
