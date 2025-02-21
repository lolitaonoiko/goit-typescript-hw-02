import axios from 'axios';
import { RequestApiData, UnsplashParams } from '../types';

const key: string = 'AcvZrYO3lEDYHSZ_6ch96lZrXV5-f1TEvieIYnqKcfA';
axios.defaults.baseURL = 'https://api.unsplash.com/';
const config = {
  headers: {
    'Accept-Version': 'v1',
    Authorization: `Client-ID ${key}`,
  },
};

async function requestApi<T>(
  query: string,
  page: number
): Promise<RequestApiData<T>> {
  const params: UnsplashParams = {
    orientation: 'landscape',
    per_page: 12,
    content_filter: 'low',
    query,
    page,
  };
  const { data } = await axios.get<RequestApiData<T>>('/search/photos', {
    ...config,
    params,
  });
  return data;
}

export default requestApi;
