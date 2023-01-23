import {
  AboutModelResponse,
  AlbumModelResponse,
  ContactLinkResponse,
  IconModelResponse,
  PlaylistModelResponse,
} from '../models/responseModels';
import { get, post } from './handleRequests';

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
