import { IconLinkModel } from '../models/helperModels';
import { IconModel, ReleaseModel } from '../models/responseModels';

export const pairLinkAndIcons = (icon: IconModel, album: ReleaseModel) => {
  if (icon.attributes.name === 'apple' && album.applemusicLink) {
    const iconLink: IconLinkModel = {
      icon: icon.attributes.imageUrl,
      link: album.applemusicLink,
      name: icon.attributes.name,
      id: icon.id,
    };
    return iconLink;
  }
  if (icon.attributes.name === 'bandcamp' && album.bandcampLink) {
    const iconLink: IconLinkModel = {
      icon: icon.attributes.imageUrl,
      link: album.bandcampLink,
      name: icon.attributes.name,
      id: icon.id,
    };
    return iconLink;
  }
  if (icon.attributes.name === 'beatport' && album.beatportLink) {
    const iconLink: IconLinkModel = {
      icon: icon.attributes.imageUrl,
      link: album.beatportLink,
      name: icon.attributes.name,
      id: icon.id,
    };
    return iconLink;
  }
  if (icon.attributes.name === 'deezer' && album.deezerLink) {
    const iconLink: IconLinkModel = {
      icon: icon.attributes.imageUrl,
      link: album.deezerLink,
      name: icon.attributes.name,
      id: icon.id,
    };
    return iconLink;
  }
  if (icon.attributes.name === 'spotify' && album.spotifyLink) {
    const iconLink: IconLinkModel = {
      icon: icon.attributes.imageUrl,
      link: album.spotifyLink,
      name: icon.attributes.name,
      id: icon.id,
    };
    return iconLink;
  }
  if (icon.attributes.name === 'soundcloud' && album.soundcloudLink) {
    const iconLink: IconLinkModel = {
      icon: icon.attributes.imageUrl,
      link: album.soundcloudLink,
      name: icon.attributes.name,
      id: icon.id,
    };
    return iconLink;
  }
  if (icon.attributes.name === 'traxsource' && album.traxsourceLink) {
    const iconLink: IconLinkModel = {
      icon: icon.attributes.imageUrl,
      link: album.traxsourceLink,
      name: icon.attributes.name,
      id: icon.id,
    };
    return iconLink;
  }
  return null;
};
