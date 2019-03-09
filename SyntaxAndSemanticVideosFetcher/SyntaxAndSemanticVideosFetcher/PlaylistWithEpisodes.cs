using System;
using System.Collections.Generic;
using System.Text;

namespace SyntaxAndSemanticVideosFetcher
{
    public class PlaylistWithEpisodes
    {
        public PlaylistLink PlaylistLink { get; set; }
        public IEnumerable<Episode> Episodes { get; set; }
    }
}
