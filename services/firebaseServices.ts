/* eslint-disable object-shorthand */
/* eslint-disable class-methods-use-this */
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../database/firebaseConfig';
import { DataBase } from '../models/databaseModels';
import { PlaylistModel, ReleaseModel } from '../models/responseModels';

export class Firebase implements DataBase {
  uploadRelease = async (uploadData: ReleaseModel) => {
    await addDoc(collection(db, 'releases'), {
      uploadData,
    });
  };

  uploadPLaylist = async (uploadData: object) => {
    try {
      await addDoc(collection(db, 'playlists'), { uploadData });
    } catch (error) {
      throw new Error('unable to upload playlist try again later');
    }
  };

  getAllReleases = async () => {
    const releases: ReleaseModel[] = [];

    try {
      const allReleases = await getDocs(collection(db, 'releases'));

      allReleases.forEach((doc) => {
        const {
          title,
          coverArt,
          artist,
          soundcloudLink,
          releaseDate,
          bandcampEmbed,
          applemusicLink,
          bandcampLink,
          beatportLink,
          deezerLink,
          spotifyLink,
          traxsourceLink,
          remixedBy,
        } = doc.data().uploadData;

        const data: ReleaseModel = {
          artist,
          title,
          coverArt,
          releaseDate,
          bandcampEmbed,
          soundcloudLink,
          applemusicLink,
          bandcampLink,
          beatportLink,
          deezerLink,
          spotifyLink,
          traxsourceLink,
          remixedBy,
          id: doc.id,
        };
        releases.push(data);
      });
      return releases;
    } catch (error) {
      throw new Error('unable to fetch releases');
    }
  };

  getAllPlaylists = async () => {
    const playlists: PlaylistModel[] = [];
    try {
      const allPlaylists = await getDocs(collection(db, 'playlists'));
      allPlaylists.forEach((doc) => {
        const { title, creator, playlistLink, playlistIframe, order } =
          doc.data().uploadData;
        const data: PlaylistModel = {
          title,
          creator,
          playlistLink,
          playlistIframe,
          order,
          id: doc.id,
        };
        playlists.push(data);
      });
      return playlists;
    } catch (error) {
      throw new Error('unable to fetch playlists');
    }
  };
}
