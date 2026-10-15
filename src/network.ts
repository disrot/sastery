import type { Channel } from "./data";

export type SpotifyPlaylist = {
  title: string;
  id: string;
  note: string;
};

function avatar(url: string) {
  return url.replace("=s900-", "=s240-");
}

/** Brand channels, highest subscriber count first. */
export const brand: Channel[] = [
  {
    name: "Sloppy",
    handle: "@slopy.",
    subs: "2.06K subscribers",
    videos: "70 videos",
    lane: "Lyrics",
    avatar:
      "https://yt3.googleusercontent.com/Vukcb0itsomVWOCQKoudqc4UQnjxf31Ygpj4xJEW4Z9hORpaLbPHVxYfnvkMBIqEdHy8A3bbEQ=s240-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Gem.",
    handle: "@gemmusics",
    subs: "1.64K subscribers",
    videos: "629 videos",
    lane: "House",
    avatar:
      "https://yt3.googleusercontent.com/tMWG65g0K5IOG4iDNL0YasxIYejS9HF7Cr6CjqtpN33smqfH8RC5WjsGIj8ZCxu98mB8m2z_dw=s240-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "EmptyArena.",
    handle: "@Emptyarena.",
    subs: "854 subscribers",
    lane: "Empty arena",
    avatar: avatar(
      "https://yt3.googleusercontent.com/mywjlmve7HperA7Pl-XjVv9QHU38j8f8SYv8gqP-OUpizjuXYvxKiIjMXO4ji8UOp0E7rZfcVw=s900-c-k-c0x00ffffff-no-rj",
    ),
  },
  {
    name: "DUΛL",
    handle: "@dualmusics",
    subs: "698 subscribers",
    lane: "Sped up",
    avatar: avatar(
      "https://yt3.googleusercontent.com/SNTE9sHkjyxkAHPqkSgnk03A7AE4oTQoyVc5040OOeHXIx1oPW3DMTTD-ReGQ0xEmRHsMHUJug=s900-c-k-c0x00ffffff-no-rj",
    ),
  },
  {
    name: "Z",
    handle: "@Zbass",
    subs: "528 subscribers",
    lane: "Bass boost",
    about: "Latest songs with bass boost. Requests to remove a track go to seapwgt@gmail.com.",
    avatar: avatar(
      "https://yt3.googleusercontent.com/F_KOqNOB_9meROV3_n-S7eOegC-IQwNhWe_qOKCWgFX1Q6ekzLVQQ4h9abiEuNpi9BZSVQ1sca4=s900-c-k-c0x00ffffff-no-rj",
    ),
  },
  {
    name: "Instrumental.",
    handle: "@Instrumentalz.",
    subs: "497 subscribers",
    lane: "Instrumental",
    avatar: avatar(
      "https://yt3.googleusercontent.com/-oFo8vT5rHpi852jZnFGChBv6oDXBKj96MsGSCIpLZw2J2D__5gxq3I_EURl0-Xr3J7x-J-IM9Y=s900-c-k-c0x00ffffff-no-rj",
    ),
  },
  {
    name: "sped.",
    handle: "@spedupaudio.",
    subs: "484 subscribers",
    videos: "110 videos",
    lane: "Sped up",
    avatar:
      "https://yt3.googleusercontent.com/jMJuI6FrMZrzujYriBPs0rcSik3xOBsGCvshFIE9roZbunQAdV1ftb2lhsqFgX2wkGaE_mfaCg=s240-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "remixty",
    handle: "@remixty",
    subs: "456 subscribers",
    lane: "Remix",
    avatar: avatar(
      "https://yt3.googleusercontent.com/n4-4KOPqBXY9Cw4UQBYgpcIdDexyvHAsfEyD6kaJCviVJjf5do2dcFlaNFRYnzEyr_C86bJcwQ=s900-c-k-c0x00ffffff-no-rj",
    ),
  },
  {
    name: "slowdedown.",
    handle: "@slowdedown",
    subs: "426 subscribers",
    videos: "97 videos",
    lane: "Slowed",
    avatar:
      "https://yt3.googleusercontent.com/C5kPp46YUhwaSc0s_94SBd2YufVGbn6OUi6Q0FJaZAEZ_KLbZhMe9wDSsrOwvv7EwxNhdCpbqA=s240-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "1Min Mashup",
    handle: "@1minmashup",
    subs: "418 subscribers",
    videos: "76 videos",
    lane: "Mashup",
    avatar:
      "https://yt3.googleusercontent.com/FNfN1hYT0d-8Wlu1BYmy9yCIAPy0ESDWYt0nnzSPYNiWRYoeppSreWfH2TkuvCN_O9dbaajB=s240-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Mxshup Mxsic.",
    handle: "@MxshupMxsic",
    subs: "377 subscribers",
    videos: "25 videos",
    lane: "Mashup",
    avatar:
      "https://yt3.googleusercontent.com/BPRWU9Tccw0AFKWvVlFX0EywJOmytWoWuzTJNwkg3HvBkimqx6eKDwLgU2IOYGaTZnv9M4n0=s240-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "8D Mashup",
    handle: "@8dmashup",
    subs: "306 subscribers",
    videos: "7 videos",
    lane: "8D mashup",
    avatar:
      "https://yt3.googleusercontent.com/1MXih21JjsXwfX1zn-qGIIrPoTX90eoUmPpYNjaszYbnPaRARwodH0kqiFt0ycBJX1rTa7XVpqo=s240-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Pacific",
    handle: "@Pacifictrap",
    subs: "158 subscribers",
    lane: "8D trap",
    about:
      "8D audio for trap and rap. A curated set of tracks where the beat, lyric, and instrumental sit in depth.",
    avatar: avatar(
      "https://yt3.googleusercontent.com/lkpKbDTty9lupr4Ai4OuOXXShYvnJ-y7oQMtWjPi9fVt1RfdVSiiDqQwmoHl1Vd-quSuuc08=s900-c-k-c0x00ffffff-no-rj",
    ),
  },
  {
    name: "Earl Networks",
    handle: "@earlnetworks",
    subs: "111 subscribers",
    lane: "Lyrics",
    about: "We the best music. Another one.",
    avatar: avatar(
      "https://yt3.googleusercontent.com/irMj-OmTgSAUxajwFI6wl2MxUixIRfBRmJX_d03MeOu6Fzaphk0-HqSTQh--nGapEoeJHYl2=s900-c-k-c0x00ffffff-no-rj",
    ),
  },
  {
    name: "Tiktok Viral Compilation",
    handle: "@tiktokviralcompilation",
    subs: "94 subscribers",
    videos: "6 videos",
    lane: "Compilations",
    avatar:
      "https://yt3.googleusercontent.com/dMIQMiGK76aGD3jEnYN1eeucqGmh26KlhYm2rJLvYpCMN1vkUq-CN8GZk16o2PSTb831ene19dg=s240-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Storm⚡️",
    handle: "@Storml.",
    subs: "72 subscribers",
    lane: "Sped up",
    avatar: avatar(
      "https://yt3.googleusercontent.com/Io3cb348k3YxxkKHWXbfTIwHjhdWjxXVeVkz7-NZqNXlRclHWJR4r2KlaX1x-fGlDVLe7kCf=s900-c-k-c0x00ffffff-no-rj",
    ),
  },
  {
    name: "Gradient.",
    handle: "@Gradient-",
    subs: "35 subscribers",
    lane: "House",
    avatar: avatar(
      "https://yt3.googleusercontent.com/dbzGMKZ5hok_a6cIA0BwWEmP5lgeeOO4TR_sjB6iXnLzfnfe6nzccDX1cnvf8ho7K1PrFIKA=s900-c-k-c0x00ffffff-no-rj",
    ),
  },
  {
    name: "dash.",
    handle: "@Dashz.",
    subs: "35 subscribers",
    lane: "Sped up",
    avatar: avatar(
      "https://yt3.googleusercontent.com/0G2A4MldVzsOfDy1qURj2rugfrf13i9I2Jn3R4LmT9BUGoDicbf7Y194BvCwK82scYHnHSq8Pg=s900-c-k-c0x00ffffff-no-rj",
    ),
  },
  {
    name: "MUCIC",
    handle: "@mucics",
    subs: "33 subscribers",
    lane: "Mashup",
    avatar: avatar(
      "https://yt3.googleusercontent.com/XLoJXgnUaFkqrPwwMlpfTLRcMCU3c6Siq2tdujH5ELT3CNv-7NfcwzCe_rIF40YGsj60IZLADg=s900-c-k-c0x00ffffff-no-rj",
    ),
  },
  {
    name: "Slap House",
    handle: "@SlapHouses",
    subs: "22 subscribers",
    videos: "10 videos",
    lane: "Slap house",
    avatar:
      "https://yt3.googleusercontent.com/8IFQ4mpdIQQZZGXHgavKdA-dbAqf62kZm3h4INa39Xa1ptdHeEUXNnGCdjhxE2xKtzDpqk8a=s240-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Just 8D",
    handle: "@Just8Dz",
    subs: "20 subscribers",
    lane: "8D",
    avatar: avatar(
      "https://yt3.googleusercontent.com/m6tSES5H5_dlZT-7E74TJZm9ObVPKdyKBR_odFHOgKF984THG1TpsrTy7nO3rCHAwIzDdcl2wQ=s900-c-k-c0x00ffffff-no-rj",
    ),
  },
  {
    name: "Heavy Bass",
    handle: "@HeavyBasss",
    subs: "13 subscribers",
    videos: "9 videos",
    lane: "Bass boost",
    avatar:
      "https://yt3.googleusercontent.com/0p_LR1D1XchlvAUZlVveJb9a_jBwmExjuyHbFWjIDXrZOGmbK_m6vsI6ocXrkv9iV6olNvSngw=s240-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Future Bounces",
    handle: "@FutureBounces",
    subs: "10 subscribers",
    lane: "Future bounce",
    about:
      "Founded in 2025. Future bounce, melodic house, and dark deep house — rising producers and fresh EDM drops.",
    avatar: avatar(
      "https://yt3.googleusercontent.com/RVf2jarciEMTepqPuSask4wOFEAKMgBBxzOSwHHbj7sN1ewlCT6QYW1tOAPyB8i40qQNxWQG=s900-c-k-c0x00ffffff-no-rj",
    ),
  },
  {
    name: "forrest",
    handle: "@forrestsped",
    subs: "6 subscribers",
    videos: "6 videos",
    lane: "Sped up",
    avatar:
      "https://yt3.googleusercontent.com/QXfI47H5yDCcpMuJU5A7gCciT7JQarscxuh3UeqPQzPu7S6uOhUySnhOGl-7xayiTjQNzKpw=s240-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Syade Music",
    handle: "@SyadeMusic",
    subs: "5 subscribers",
    lane: "EDM",
    avatar: avatar(
      "https://yt3.googleusercontent.com/O6Sur2U3cn2mpzP9JXoCFUV0hZXQT3cAtm16G4VWBdgBKB5QKrX9ejau-8jlUGr_pa6BNM6A=s900-c-k-c0x00ffffff-no-rj",
    ),
  },
  {
    name: "Niche House Music",
    handle: "@nichehouses",
    subs: "5 subscribers",
    lane: "House",
    avatar: avatar(
      "https://yt3.googleusercontent.com/peBdNMX1d2rcIzaOiDyBlHqWbmE_YqvIKTn1sRKzYY17DpEg3gnZqD5Y7JHX0wcRqajN0WYJPTA=s900-c-k-c0x00ffffff-no-rj",
    ),
  },
  {
    name: "Bame",
    handle: "@Bame-",
    subs: "5 subscribers",
    lane: "Mashup",
    avatar: avatar(
      "https://yt3.googleusercontent.com/f3mM8__FyMDmeLphJKx1YRVcASy4pJJ6GC2XT17PNcsZTx6WIJmmwSpT3Z-DGHLvl7GEeHWYFw=s900-c-k-c0x00ffffff-no-rj",
    ),
  },
  {
    name: "Afro House Music",
    handle: "@afrohouses",
    subs: "4 subscribers",
    lane: "Afro house",
    avatar: avatar(
      "https://yt3.googleusercontent.com/EtKHiQyXFSC-ZBZ7y_x1jK_OgoW1VjwjCDCv9J2maKvoEijr6fjX1hWALl8xz3iYaRiCtYIREg=s900-c-k-c0x00ffffff-no-rj",
    ),
  },
  {
    name: "Extended.",
    handle: "@Extendedremixs",
    subs: "4 subscribers",
    videos: "3 videos",
    lane: "Extended",
    about: "Extended mixes and remixes.",
    avatar:
      "https://yt3.googleusercontent.com/xsh1MU3cL-Kt0U50Q9nu8zby7t-K02-b3mnm-5-HUe8FNItSYlEhopiVq8hfx60CzWOzhZpfCw=s240-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Reflectional",
    handle: "@reflectionals",
    subs: "2 subscribers",
    about: "Helping small channels.",
    avatar: avatar(
      "https://yt3.googleusercontent.com/i1cxZMAmLhumfQclMcKWPbQHa2cjVvBlDIper8wEDEdiLGbnaIX40OmoF2bQhq1HdOx-7m18mSs=s900-c-k-c0x00ffffff-no-rj",
    ),
  },
];

/** Partner channels, highest subscriber count first. */
export const partners: Channel[] = [
  {
    name: "1Hr Trend",
    handle: "@1HrTrend",
    subs: "88.7K subscribers",
    videos: "81 videos",
    lane: "Trends",
    about: "Founded in 2020. Music shared with people around the world.",
    avatar:
      "https://yt3.googleusercontent.com/qMUq-dsIA5rHQesxshi5kTP_yNnluo402iPnWdlyBKsdqU4-oaSJUSFStLSTCZJws3XFsDgbBQ=s240-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Spedie",
    handle: "@Spedie",
    subs: "5.17K subscribers",
    videos: "81 videos",
    lane: "Sped up",
    avatar:
      "https://yt3.googleusercontent.com/GucTLYT_NZTYokWZWmETY5iW6u9WXFF3eDh3wPdAq4uPF7JHaMjPRMvxBVet4giBbnWB5lVqGLI=s240-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "8d.",
    handle: "@8dmusics.",
    subs: "3.22K subscribers",
    videos: "806 videos",
    lane: "8D",
    avatar:
      "https://yt3.googleusercontent.com/yWZiafnuQOBvgeylcMZLYe7_KNCuAxiIzdQ1ExVzcAIb1RlI2q_2qj1EzsyenzT5exSXYnpQ=s240-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Tropical Pasta",
    handle: "@tropicalpastas",
    subs: "1.93K subscribers",
    videos: "101 videos",
    lane: "House",
    avatar:
      "https://yt3.googleusercontent.com/tZMx_56QpyZQqwLc_bvP7INr6KmF21vCgSGVKyYOMcwkTvvzr2Em_PvNPnwmOqa7YYsLhqxEMA=s240-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Let's Latin",
    handle: "@LetsLatins",
    subs: "1.59K subscribers",
    videos: "46 videos",
    lane: "Latin",
    avatar:
      "https://yt3.googleusercontent.com/4TlO7_dsHwubA4OJUFQ8TNEwpWeWnljqMUVkV6BpjMNu5faqUvpSAlKIR3JcUc8jvQQXR9qvxA=s240-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Shinky",
    handle: "@shinky.",
    subs: "1.19K subscribers",
    videos: "78 videos",
    about: "TikTok trends, plus requests in the comments.",
    avatar:
      "https://yt3.googleusercontent.com/gSs2k6geIOwZwoQT42UA8XjYc2ELknb11Iz9v0gmyCZ6hlC800MeNVWazznfYsFo2tcaGXjk=s240-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "7D Tunes",
    handle: "@7dtunes",
    subs: "1.07K subscribers",
    videos: "192 videos",
    lane: "8D",
    avatar:
      "https://yt3.googleusercontent.com/vf08-RG_06dw0hLedTHaTtTS4XNfKfhPMzY0NHScnfpNoaocKQdloxXizPI6uX_noNsTj2M6=s240-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "That Viral Audio",
    handle: "@ThatViralAudio",
    subs: "1K subscribers",
    videos: "21 videos",
    lane: "Viral audio",
    avatar:
      "https://yt3.googleusercontent.com/KX394qQs4Ew6obELLdK13-ur68dHHMI6D_fs9iF4t_g69HFlg8gYWoUJ77jHi5_kdYoutj7Y=s240-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "phonkdash",
    handle: "@phonkdash",
    subs: "715 subscribers",
    videos: "31 videos",
    lane: "Phonk",
    about: "Speedy phonk — fast beats, instrumentals, and rap verses.",
    avatar:
      "https://yt3.googleusercontent.com/eHRj8w9bUX3vs_6YAc7yGo1eh4Wc622JPm27qO3ofxR7OJ3cict1yx4EDxmgIxZhoUizwLJ-=s240-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "1Hr Trend Extra",
    handle: "@1htextra",
    subs: "632 subscribers",
    about: "Extra TikTok trends and requests, beside 1Hr Trend.",
    avatar: avatar(
      "https://yt3.googleusercontent.com/T-6fcP1MESiwxYZ-SSXipsy98JQVBASzg6GK8q5xfzV3ixjFGKPJr9KAJl38g_qpGJTbJrL0lA=s900-c-k-c0x00ffffff-no-rj",
    ),
  },
];

/** Four playlists highlighted on the home page. */
export const spotifyPlaylists: SpotifyPlaylist[] = [
  { title: "Sped Up Playlist", id: "2YkygZlH956oaYmqgpbn2o", note: "Sped up" },
  { title: "8D MUSIC", id: "3yLQRLHePuevximpxLmcUy", note: "8D" },
  { title: "House music", id: "3GPlgTNxnHPIpjro0FuyGO", note: "House" },
  { title: "Latin Party", id: "0mMrdreLx26mRT5ocnmFCb", note: "Latin" },
];

/** Every public playlist on the Sastery Spotify profile. */
export const allPlaylists: SpotifyPlaylist[] = [
  { title: "Gaming Music Playlist 2026", id: "6DmKYLpa8cpIqObLwtMAnZ", note: "Gaming" },
  { title: "House music", id: "3GPlgTNxnHPIpjro0FuyGO", note: "House" },
  { title: "remix hiit friday late night", id: "0c0Igv1x7l9YnUJaktPRub", note: "Remix" },
  { title: "Heard It Before", id: "35U0kYMrea9QPZQbhGCcNt", note: "Heard it" },
  { title: "feelin myself", id: "5TC2oZzKQl43Zp3rky9PYF", note: "Mood" },
  { title: "extended. uploads", id: "5x1pPMEtGnKPyV9OsxnfK0", note: "Extended" },
  { title: "2025 Is The New 2015", id: "1XGZoTFcrVfDJU2pS1PFjw", note: "2015" },
  { title: "White Girl Music Type Shiiiii", id: "3qhxbQqIFyeQOJzYmf8RG7", note: "Pop" },
  { title: "chill n thrill", id: "4gwhxiGfpnJXv2lWqZULuR", note: "Chill" },
  { title: "Country Hits 2025", id: "29Cn2P1WsJ80s0tjxXDbxa", note: "Country" },
  { title: "noplace jam", id: "3f1uhDDS4sWgjR8ooAi9qg", note: "Jam" },
  { title: "Boost", id: "3uTDuwz05rIvDPrTLiLSf0", note: "Bass" },
  { title: "Latin Party", id: "0mMrdreLx26mRT5ocnmFCb", note: "Latin" },
  { title: "Slowed Reverb", id: "38xwx6OdfwEnlZAK10oiEO", note: "Slowed" },
  { title: "Slap House", id: "2EC36ns96YTaq2ch73uARr", note: "Slap house" },
  { title: "Deep House Relax", id: "3xDDmASVYgsWmCvTMT0vKP", note: "Deep house" },
  { title: "Are you okay? sad songs", id: "2TUpleaYWyclaOhO6zUHQe", note: "Sad" },
  { title: "Lip-syncing on bed", id: "6RzvlFZ0dJ453oZ4YLQkXQ", note: "Lip-sync" },
  { title: "8D MUSIC", id: "3yLQRLHePuevximpxLmcUy", note: "8D" },
  { title: "Hip-Hop Craze", id: "6wkADeANm73jbLjPEauZBL", note: "Hip-hop" },
  { title: "Sped Up Playlist", id: "2YkygZlH956oaYmqgpbn2o", note: "Sped up" },
  { title: "TIKTOK MASHUP", id: "179go1HdUIXj8aDJhO74v5", note: "Mashup" },
];
