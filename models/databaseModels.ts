import { PlaylistModel, ReleaseModel } from './responseModels';

export interface DataBase {
  getAllReleases(): Promise<ReleaseModel[]>;
  getAllPlaylists(): Promise<PlaylistModel[]>;
  uploadRelease(data: object): Promise<void>;
  uploadPLaylist(data: object): Promise<void>;
  /*  getMyPlayLists(): PlaylistModel[];
  getMyAboutContent(): AboutModel[]; */
}
