import {
  AboutModelResponse,
  AlbumModelResponse,
  ContactLinkResponse,
  IconModelResponse,
  PlaylistModelResponse,
  ReleaseModel,
} from '../models/responseModels';
import { get, post } from './handleRequests';

const LOCAL_BASE_URL = process.env.NEXT_PUBLIC_LOCAL_BASE_URL;

export const getSoc = async (baseUrl: string, apiKey: string) => {
  const res = await get<ContactLinkResponse>(`${baseUrl}contact-links`, apiKey);

  return res;
};

export const getReleases = async (baseUrl: string, apiKey: string) => {
  const res = await get<AlbumModelResponse>(`${baseUrl}albums`, apiKey);

  return res;
};

export const getIcons = async (baseUrl: string, apiKey: string) => {
  const res = await get<IconModelResponse>(`${baseUrl}social-icons`, apiKey);

  return res;
};

export const getPlaylists = async (baseUrl: string, apiKey: string) => {
  const res = await get<PlaylistModelResponse>(`${baseUrl}playlists`, apiKey);

  return res;
};

export const getAboutContent = async (baseUrl: string, apiKey: string) => {
  const res = await get<AboutModelResponse>(
    `${baseUrl}about-containers`,
    apiKey,
  );

  return res;
};

export const subscribeToMailingList = async (baseUrl: string, data: object) => {
  const res = await post(`${baseUrl}mailchimp`, data);
  return res;
};

// new

export const getAllReleases = async () => {
  const res = await get<ReleaseModel[]>(`${LOCAL_BASE_URL}get-releases`);
  return res;
};

export const uploadRelease = async (data: object) => {
  const res = await post(`${LOCAL_BASE_URL}upload-release`, data);
  return res;
};

export const uploadPlaylist = async (data: object) => {
  const res = await post(`${LOCAL_BASE_URL}upload-playlist`, data);
  return res;
};
