using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace SyntaxAndSemanticVideosFetcher
{
    public static class Extensions
    {
        public static string InBetween(this string haystack, string afterThis, string beforeThis)
        {
            return InBetween(haystack, afterThis, beforeThis, 1, 0);
        }

        public static string InBetween(this string haystack, string afterThis, string beforeThis,
            int afterIndex, int beforeIndex, bool includeAfterAndBefore = false)
        {
            if (haystack.Contains(afterThis))
            {
                var split = haystack.Split(afterThis);
                if (split.Length > afterIndex)
                {
                    string rv = split[afterIndex];
                    if (rv.Contains(beforeThis))
                    {
                        split = rv.Split(beforeThis);
                        if (split.Length > beforeIndex)
                        {
                            rv = split[beforeIndex];

                            if (includeAfterAndBefore)
                            {
                                rv = $"{afterThis}{rv}{beforeThis}";
                            }

                            return rv;
                        }
                    }
                }
            }
            return null;
        }
    }
}
