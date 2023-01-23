import { IconLinkModel } from '../models/helperModels';
import { AlbumModel, IconModel } from '../models/responseModels';

export const pairLinkAndIcons = (icon: IconModel, album: AlbumModel) => {
  if (icon.attributes.name === 'apple' && album.attributes.applemusicLink) {
    const iconLink: IconLinkModel = {
      icon: icon.attributes.imageUrl,
      link: album.attributes.applemusicLink,
      name: icon.attributes.name,
    };
    return iconLink;
  }
  if (icon.attributes.name === 'bandcamp' && album.attributes.bandcampLink) {
    const iconLink: IconLinkModel = {
      icon: icon.attributes.imageUrl,
      link: album.attributes.bandcampLink,
      name: icon.attributes.name,
    };
    return iconLink;
  }
  if (icon.attributes.name === 'beatport' && album.attributes.beatportLink) {
    const iconLink: IconLinkModel = {
      icon: icon.attributes.imageUrl,
      link: album.attributes.beatportLink,
      name: icon.attributes.name,
    };
    return iconLink;
  }
  if (icon.attributes.name === 'deezer' && album.attributes.deezerLink) {
    const iconLink: IconLinkModel = {
      icon: icon.attributes.imageUrl,
      link: album.attributes.deezerLink,
      name: icon.attributes.name,
    };
    return iconLink;
  }
  if (icon.attributes.name === 'spotify' && album.attributes.spotifyLink) {
    const iconLink: IconLinkModel = {
      icon: icon.attributes.imageUrl,
      link: album.attributes.spotifyLink,
      name: icon.attributes.name,
    };
    return iconLink;
  }
  if (
    icon.attributes.name === 'soundcloud' &&
    album.attributes.soundcloudLink
  ) {
    const iconLink: IconLinkModel = {
      icon: icon.attributes.imageUrl,
      link: album.attributes.soundcloudLink,
      name: icon.attributes.name,
    };
    return iconLink;
  }
  if (
    icon.attributes.name === 'traxsource' &&
    album.attributes.traxsourceLink
  ) {
    const iconLink: IconLinkModel = {
      icon: icon.attributes.imageUrl,
      link: album.attributes.traxsourceLink,
      name: icon.attributes.name,
    };
    return iconLink;
  }
  return null;
};
