export interface ContactLinkObject {
  attributes: {
    email?: string;
    contactLink?: string;
    iconUrl: string;
    title: string;
  };
  id: number;
}

export interface ContactLinkResponse {
  data: ContactLinkObject[];
}

export interface AlbumModel {
  attributes: {
    applemusicLink?: string;
    artist: string;
    bandcampLink?: string;
    beatportLink?: string;
    deezerLink?: string;
    coverLink: string;
    releaseDate: string;
    bandcampEmbed: string;
    soundcloudLink: string;
    spotifyLink?: string;
    title: string;
    traxsourceLink?: string;
  };
  id: number;
}

export interface AlbumModelResponse {
  data: AlbumModel[];
}

export interface IconModel {
  attributes: {
    name: string;
    imageUrl: string;
  };
  id: number;
}

export interface IconModelResponse {
  data: IconModel[];
}

export interface PlaylistModel {
  attributes: {
    title: string;
    creator: string;
    playlistLink: string;
    playlistIframe: string;
    order: number;
  };
  id: number;
}

export interface PlaylistModelResponse {
  data: PlaylistModel[];
}

export interface AboutModel {
  attributes: {
    title: string;
    text: string;
    imageUrl: string;
    order: number;
  };
  id: number;
}

export interface AboutModelResponse {
  data: AboutModel[];
}
