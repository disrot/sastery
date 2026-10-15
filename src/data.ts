export type Channel = {
  name: string;
  handle: string;
  subs: string;
  videos?: string;
  avatar: string;
  lane?: string;
  about?: string;
};

export type Upload = {
  title: string;
  id: string;
  channel: string;
  views: string;
  age: string;
};

export const CHANNEL_URL = "https://www.youtube.com/@sastery";
export const BRAND_AVATAR =
  "https://yt3.googleusercontent.com/o1DmfU7kAG-NpzC6vbG1XKaJF47bxADnGy8s1v42obIOwBnwSgiCO1-vEbFCbHM5S7e_N2-5sQ=s240-c-k-c0x00ffffff-no-rj";

export { brand, partners, spotifyPlaylists } from "./network";
export type { SpotifyPlaylist } from "./network";

export const uploads: Upload[] = [
  {
    title: "Joel Corry x RAYE & David Guetta - BED (Chris Later Remix) | Slap House",
    id: "EURSHcCaLGY",
    channel: "Slap House",
    views: "114 views",
    age: "1y ago",
  },
  {
    title: "Don Diablo - 9MM",
    id: "r6zBlC9Yc60",
    channel: "Gem.",
    views: "6 views",
    age: "10h ago",
  },
  {
    title: "STELLA LEFTY - Boston ❖ sped up ❖",
    id: "QGi7oqMqkew",
    channel: "sped.",
    views: "453 views",
    age: "1mo ago",
  },
  {
    title: "Hootie Frutti (Heavy bass)",
    id: "KnFV7vFDmFg",
    channel: "Heavy Bass",
    views: "1.3K views",
    age: "2mo ago",
  },
  {
    title: "Bebe Rexha & Faithless - New Religion (slowed)",
    id: "NL8e3THd09k",
    channel: "slowdedown.",
    views: "269 views",
    age: "7mo ago",
  },
  {
    title: "Tove Lo - Talking Body (sped up lyrics)",
    id: "emd_6H_ld6M",
    channel: "forrest",
    views: "14 views",
    age: "12d ago",
  },
  {
    title: "PANCHIKO - DEATHMETAL (Lyrics)",
    id: "Le5ncqIm2io",
    channel: "Sloppy",
    views: "482 views",
    age: "2w ago",
  },
  {
    title: "Tiktok Mashup 2023 (not clean) | 8D AUDIO",
    id: "MulvVSvz9pk",
    channel: "8D Mashup",
    views: "4.7K views",
    age: "3y ago",
  },
  {
    title: "Hit the Quan Dance TikTok Compilation | Ultimate TikToK Compilation",
    id: "Zep44ZSi31Q",
    channel: "Tiktok Viral Compilation",
    views: "159 views",
    age: "6y ago",
  },
  {
    title: "Anyma & Ellie Goulding - Hypnotized (Extended Mix)",
    id: "yE3-awTe0q0",
    channel: "Extended.",
    views: "27 views",
    age: "1y ago",
  },
  {
    title: "Mauvais Djo - Maladie x Pilé (Mashup)",
    id: "qMH1fZZbux0",
    channel: "Mxshup Mxsic.",
    views: "77K views",
    age: "2mo ago",
  },
  {
    title: "TikTok Mashup (Not clean)",
    id: "wAWVKIZR840",
    channel: "1Min Mashup",
    views: "124 views",
    age: "5y ago",
  },
];

export const faqs = [
  {
    q: "What is Sastery?",
    a: "Sastery is the YouTube home for this network. The channel page already groups the brand channels, the partners, the playlists, and what the network is uploading. The line on the channel is simple: we got you all covered.",
  },
  {
    q: "What is a brand channel versus a partner?",
    a: "Brand channels are the Sastery channels, led by Sloppy and Gem. Partners are the outside row, led by 1Hr Trend, Spedie, and 8d. Both lists are sorted with the larger audiences first.",
  },
  {
    q: "Who can send a track?",
    a: "Artists, editors, and labels who can confirm they have the rights to the audio. A pitch is either a promotion on a brand channel or a playlist listing, plus a link and credits.",
  },
  {
    q: "Where does a submission go?",
    a: "Right now it stays in this browser, with a reference code you can copy. Nothing is sent to a server yet. When you connect a desk or inbox, this form is the front door.",
  },
  {
    q: "Does a pitch get uploaded automatically?",
    a: "No. A promotion or a playlist listing is a request. Sending it does not publish the track on a channel or drop it into a playlist.",
  },
];

export function youtubeChannel(handle: string) {
  return `https://www.youtube.com/${handle}`;
}

export function videoCount(label: string | undefined) {
  return Number((label ?? "").replace(/[^\d]/g, "")) || 0;
}

export function totalVideos(channels: Channel[]) {
  return channels.reduce((sum, channel) => sum + videoCount(channel.videos), 0);
}
