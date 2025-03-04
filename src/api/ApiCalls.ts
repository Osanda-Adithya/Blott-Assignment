import {NewsResponse} from '../models';
import ApiClient from './ApiClient';

export const fetchMaketingNews = (): Promise<NewsResponse[]> => {
  return new Promise<NewsResponse[]>(async (resolve, reject) => {
    const response: any = await new ApiClient().getRequest('/news');
    if (response?.error) {
      reject(response?.error);
    }
    resolve(response as NewsResponse[]);
  });
};
