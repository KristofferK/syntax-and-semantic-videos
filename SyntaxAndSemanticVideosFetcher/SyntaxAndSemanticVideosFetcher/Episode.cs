namespace SyntaxAndSemanticVideosFetcher
{
    public class Episode
    {
        public Episode()
        {
        }

        public string Title { get; set; }
        public string Id { get; set; }
        public string Url
        {
            get
            {
                return "https://www.youtube.com/watch?v=" + Id;
            }
        }
        public string EmbedUrl
        {
            get
            {
                return "https://www.youtube.com/embed/" + Id;
            }
        }
    }
}