export const genreData = [
    { "id": 1, "short_name": "act", "technical_name": "action", "translation": "🔥 Action & Adventure", "slug": "action-and-adventure" },
    { "id": 2, "short_name": "ani", "technical_name": "animation", "translation": "🧞‍♀️ Animation", "slug": "animation" },
    { "id": 3, "short_name": "cmy", "technical_name": "comedy", "translation": "😂 Comedy", "slug": "comedy" },
    { "id": 4, "short_name": "crm", "technical_name": "crime", "translation": "🚔 Crime", "slug": "crime" },
    { "id": 5, "short_name": "doc", "technical_name": "documentation", "translation": "🎥 Documentary", "slug": "documentary" },
    { "id": 6, "short_name": "drm", "technical_name": "drama", "translation": "😮 Drama", "slug": "drama" },
    { "id": 7, "short_name": "fnt", "technical_name": "fantasy", "translation": "🧙‍♂️ Fantasy", "slug": "fantasy" },
    { "id": 8, "short_name": "hst", "technical_name": "history", "translation": "🏰 History", "slug": "history" },
    { "id": 9, "short_name": "hrr", "technical_name": "horror", "translation": "💀 Horror", "slug": "horror" },
    { "id": 10, "short_name": "fml", "technical_name": "family", "translation": "👨‍👩‍👧 Kids & Family", "slug": "kids-and-family" },
    { "id": 11, "short_name": "msc", "technical_name": "music", "translation": "🎵 Music & Musical", "slug": "music-and-musical" },
    { "id": 12, "short_name": "trl", "technical_name": "thriller", "translation": "😨 Mystery & Thriller", "slug": "mystery-and-thriller" },
    { "id": 13, "short_name": "rma", "technical_name": "romance", "translation": "❤️ Romance", "slug": "romance" },
    { "id": 14, "short_name": "scf", "technical_name": "scifi", "translation": "🚀 Science-Fiction", "slug": "science-fiction" },
    { "id": 15, "short_name": "spt", "technical_name": "sport", "translation": "🏉 Sport", "slug": "sport" },
    { "id": 16, "short_name": "war", "technical_name": "war", "translation": "🎖 War & Military", "slug": "war-and-military" },
    { "id": 17, "short_name": "wsn", "technical_name": "western", "translation": "🤠 Western", "slug": "western" },
    { "id": 23, "short_name": "rly", "technical_name": "reality", "translation": "💎 Reality TV", "slug": "reality-tv" },
    { "id": 18, "short_name": "eur", "technical_name": "european", "translation": "🏠 Made in Europe", "slug": "made-in-europe" }
]

export const providerData = [
  {
    "id": 8,
    "technical_name": "netflix",
    "short_name": "nfx",
    "clear_name": "Netflix",
    "priority": 10,
    "display_priority": 1,
    "monetization_types": [
      "flatrate"
    ],
    "icon_url": "/icon/430997/{profile}",
    "slug": "netflix",
    "data": {
      "deeplink_data": [
        {
          "scheme": "https",
          "packages": [
            "com.netflix.ninja",
            "com.netflix.mediaclient",
            "com.netflix"
          ],
          "platforms": [
            "fire_tv",
            "android_tv",
            "tvos"
          ],
          "path_template": "www.netflix.com/watch/%DEEPLINK%",
          "extras": {
            "S.source": "30"
          }
        }
      ],
      "packages": {
        "android_tv": "com.netflix.ninja",
        "fire_tv": "com.netflix.ninja",
        "tvos": "com.netflix.ninja"
      }
    }
  },
  {
    "id": 9,
    "technical_name": "amazonprime",
    "short_name": "amp",
    "clear_name": "Amazon Prime Video",
    "priority": 4,
    "display_priority": 4,
    "monetization_types": [
      "flatrate"
    ],
    "icon_url": "/icon/52449539/{profile}",
    "slug": "amazon-prime-video",
    "data": {
      "deeplink_data": [
        {
          "scheme": "amzn",
          "packages": [
            "com.amazon.tv.launcher"
          ],
          "platforms": [
            "fire_tv"
          ],
          "path_template": "com.amazon.tv.launcher/detail?provider=aiv&providerId=%DEEPLINK%",
          "extras": null
        },
        {
          "scheme": "",
          "packages": [
            "com.amazon.amazonvideo.livingroom"
          ],
          "platforms": [
            "android_tv"
          ],
          "path_template": "",
          "extras": {
            "S.com.amazon.ignition.DeepLinkIntent.DEEP_LINK": "%DEEPLINK%"
          }
        },
        {
          "scheme": "",
          "packages": [
            "com.aiv"
          ],
          "platforms": [
            "tvos"
          ],
          "path_template": "",
          "extras": null
        }
      ],
      "packages": {
        "android_tv": "com.amazon.amazonvideo.livingroom",
        "fire_tv": "com.amazon.tv.launcher",
        "tvos": "com.aiv"
      }
    }
  },
  {
    "id": 337,
    "technical_name": "disneyplus",
    "short_name": "dnp",
    "clear_name": "Disney Plus",
    "priority": 5,
    "display_priority": 3,
    "monetization_types": [
      "flatrate"
    ],
    "icon_url": "/icon/147638351/{profile}",
    "slug": "disney-plus",
    "data": {
      "deeplink_data": [
        {
          "scheme": "https",
          "packages": [
            "com.disney.disneyplus"
          ],
          "platforms": [
            "android_tv"
          ],
          "path_template": "disneyplus.com/%DEEPLINK%",
          "extras": null
        },
        {
          "scheme": "",
          "packages": [
            "com.disneyplus"
          ],
          "platforms": [
            "tvos"
          ],
          "path_template": "",
          "extras": null
        },
        {
          "scheme": "https",
          "packages": [
            "com.disney.disneyplus"
          ],
          "platforms": [
            "fire_tv"
          ],
          "path_template": "disneyplus.com/%DEEPLINK%",
          "extras": null
        }
      ],
      "packages": {
        "android_tv": "com.disney.disneyplus",
        "fire_tv": "com.disney.disneyplus",
        "tvos": "com.disneyplus"
      }
    }
  },
  {
    "id": 39,
    "technical_name": "nowtv",
    "short_name": "ntv",
    "clear_name": "Now TV",
    "priority": 5,
    "display_priority": 2,
    "monetization_types": [
      "flatrate"
    ],
    "icon_url": "/icon/694554/{profile}",
    "slug": "now-tv",
    "data": {
      "deeplink_data": [],
      "packages": {
        "android_tv": "",
        "fire_tv": "",
        "tvos": ""
      }
    }
  },
  {
    "id": 38,
    "technical_name": "bbc",
    "short_name": "bbc",
    "clear_name": "BBC iPlayer",
    "priority": 5,
    "display_priority": 8,
    "monetization_types": [
      "free"
    ],
    "icon_url": "/icon/694553/{profile}",
    "slug": "bbc-iplayer",
    "data": {
      "deeplink_data": [
        {
          "scheme": "",
          "packages": [
            "bbc"
          ],
          "platforms": [
            "tvos"
          ],
          "path_template": "",
          "extras": null
        }
      ],
      "packages": {
        "android_tv": "",
        "fire_tv": "",
        "tvos": "bbc"
      }
    }
  },
  {
    "id": 103,
    "technical_name": "all4",
    "short_name": "al4",
    "clear_name": "All 4",
    "priority": 5,
    "display_priority": 6,
    "monetization_types": [
      "free"
    ],
    "icon_url": "/icon/3059247/{profile}",
    "slug": "all-4",
    "data": {
      "deeplink_data": [
        {
          "scheme": "",
          "packages": [
            "all4"
          ],
          "platforms": [
            "tvos"
          ],
          "path_template": "",
          "extras": null
        }
      ],
      "packages": {
        "android_tv": "",
        "fire_tv": "",
        "tvos": "all4"
      }
    }
  },
  {
    "id": 41,
    "technical_name": "itv",
    "short_name": "itv",
    "clear_name": "ITV Player",
    "priority": 5,
    "display_priority": 18,
    "monetization_types": [
      "flatrate"
    ],
    "icon_url": "/icon/694556/{profile}",
    "slug": "itv-player",
    "data": {
      "deeplink_data": [
        {
          "scheme": "",
          "packages": [
            "itv"
          ],
          "platforms": [
            "tvos",
            "android_tv",
            "fire_tv"
          ],
          "path_template": "",
          "extras": null
        }
      ],
      "packages": {
        "android_tv": "itv",
        "fire_tv": "itv",
        "tvos": "itv"
      }
    }
  },
  {
    "id": 137,
    "technical_name": "uktvplay",
    "short_name": "ukt",
    "clear_name": "UKTV Play",
    "priority": 5,
    "display_priority": 17,
    "monetization_types": [
      "ads"
    ],
    "icon_url": "/icon/5149848/{profile}",
    "slug": "uktv-play",
    "data": {
      "deeplink_data": [],
      "packages": {
        "android_tv": "",
        "fire_tv": "",
        "tvos": ""
      }
    }
  },
  {
    "id": 175,
    "technical_name": "netflixkids",
    "short_name": "nfk",
    "clear_name": "Netflix Kids",
    "priority": 5,
    "display_priority": 30,
    "monetization_types": [
      "flatrate"
    ],
    "icon_url": "/icon/14385750/{profile}",
    "slug": "netflix-kids",
    "data": {
      "deeplink_data": [
        {
          "scheme": "https",
          "packages": [
            "com.netflix.ninja",
            "com.netflix.mediaclient"
          ],
          "platforms": [
            "fire_tv",
            "android_tv"
          ],
          "path_template": "www.netflix.com/watch/%DEEPLINK%",
          "extras": {
            "S.source": "30"
          }
        },
        {
          "scheme": "",
          "packages": [
            "surprice"
          ],
          "platforms": [
            "tvos"
          ],
          "path_template": "",
          "extras": null
        }
      ],
      "packages": {
        "android_tv": "com.netflix.ninja",
        "fire_tv": "com.netflix.ninja",
        "tvos": "surprice"
      }
    }
  },
  {
    "id": 333,
    "technical_name": "my5",
    "short_name": "myf",
    "clear_name": "My5",
    "priority": 5,
    "display_priority": 35,
    "monetization_types": [
      "ads"
    ],
    "icon_url": "/icon/146470618/{profile}",
    "slug": "my5",
    "data": {
      "deeplink_data": [
        {
          "scheme": "",
          "packages": [
            "my5"
          ],
          "platforms": [
            "tvos",
            "android_tv",
            "fire_tv"
          ],
          "path_template": "",
          "extras": null
        }
      ],
      "packages": {
        "android_tv": "my5",
        "fire_tv": "my5",
        "tvos": "my5"
      }
    }
  },
  {
    "id": 380,
    "technical_name": "britboxuk",
    "short_name": "bbk",
    "clear_name": "BritBox",
    "priority": 5,
    "display_priority": 36,
    "monetization_types": [
      "flatrate"
    ],
    "icon_url": "/icon/175038692/{profile}",
    "slug": "britbox",
    "data": {
      "deeplink_data": [],
      "packages": {
        "android_tv": "",
        "fire_tv": "",
        "tvos": ""
      }
    }
  },
  {
    "id": 29,
    "technical_name": "skygo",
    "short_name": "skg",
    "clear_name": "Sky Go",
    "priority": 5,
    "display_priority": 7,
    "monetization_types": [
      "flatrate"
    ],
    "icon_url": "/icon/120096503/{profile}",
    "slug": "sky-go",
    "data": {
      "deeplink_data": [],
      "packages": {
        "android_tv": "",
        "fire_tv": "",
        "tvos": ""
      }
    }
  },
  {
    "id": 223,
    "technical_name": "hayu",
    "short_name": "hay",
    "clear_name": "hayu",
    "priority": 5,
    "display_priority": 9,
    "monetization_types": [
      "flatrate"
    ],
    "icon_url": "/icon/89154446/{profile}",
    "slug": "hayu",
    "data": {
      "deeplink_data": [
        {
          "scheme": "",
          "packages": [
            "hayu"
          ],
          "platforms": [
            "tvos"
          ],
          "path_template": "",
          "extras": null
        }
      ],
      "packages": {
        "android_tv": "",
        "fire_tv": "",
        "tvos": "hayu"
      }
    }
  },
  {
    "id": 3,
    "technical_name": "play",
    "short_name": "ply",
    "clear_name": "Google Play Movies",
    "priority": 4,
    "display_priority": 11,
    "monetization_types": [
      "rent",
      "buy"
    ],
    "icon_url": "/icon/169478387/{profile}",
    "slug": "google-play-movies",
    "data": {
      "deeplink_data": [
        {
          "scheme": "https",
          "packages": [
            "com.google.android.videos"
          ],
          "platforms": [
            "android_tv",
            "fire_tv"
          ],
          "path_template": "www.youtube.com/watch?v=%DEEPLINK%",
          "extras": null
        }
      ],
      "packages": {
        "android_tv": "com.google.android.videos",
        "fire_tv": "com.google.android.videos",
        "tvos": ""
      }
    }
  },
  {
    "id": 350,
    "technical_name": "appletvplus",
    "short_name": "atp",
    "clear_name": "Apple TV Plus",
    "priority": 5,
    "display_priority": 20,
    "monetization_types": [
      "flatrate"
    ],
    "icon_url": "/icon/152862153/{profile}",
    "slug": "apple-tv-plus",
    "data": {
      "deeplink_data": [
        {
          "scheme": "",
          "packages": [
            "nice"
          ],
          "platforms": [
            "tvos"
          ],
          "path_template": "",
          "extras": null
        }
      ],
      "packages": {
        "android_tv": "",
        "fire_tv": "",
        "tvos": "nice"
      }
    }
  },
  {
    "id": 93,
    "technical_name": "talktalktv",
    "short_name": "ttv",
    "clear_name": "Talk Talk TV",
    "priority": 5,
    "display_priority": 22,
    "monetization_types": [
      "rent",
      "buy"
    ],
    "icon_url": "/icon/2422254/{profile}",
    "slug": "talk-talk-tv",
    "data": {
      "deeplink_data": [],
      "packages": {
        "android_tv": "",
        "fire_tv": "",
        "tvos": ""
      }
    }
  }
]

export const imageGenerator = (provider) => ( "https://images.justwatch.com" + provider + "/s100")
