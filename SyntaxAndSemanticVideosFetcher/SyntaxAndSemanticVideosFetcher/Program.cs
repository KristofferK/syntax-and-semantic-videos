using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;

namespace SyntaxAndSemanticVideosFetcher
{
    class Program
    {
        static void Main(string[] args)
        {
            var channel = new YoutubeChannelFetcher().GetChannel();

            var serializerSettings = new JsonSerializerSettings();
            serializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            var serialized = JsonConvert.SerializeObject(channel, serializerSettings);
            Console.WriteLine(serialized);
        }
    }
}
