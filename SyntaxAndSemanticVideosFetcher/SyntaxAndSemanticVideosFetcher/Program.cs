using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace SyntaxAndSemanticVideosFetcher
{
    class Program
    {
        static void Main(string[] args)
        {
            var channel = new YoutubeChannelFetcher().GetChannel();
            var serialized = JsonConvert.SerializeObject(channel);
            Console.WriteLine(serialized);
        }
    }
}
