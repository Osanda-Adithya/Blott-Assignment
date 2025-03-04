import {BASE_URL, CATEGORY, SECRET_KEY} from '../utils/env';

export default class ApiClient {
  constructor() {}

  async getRequest<T>(endpoint: string): Promise<T> {
    return new Promise<T>(async resolve => {
      fetch(`${BASE_URL}${endpoint}?category=${CATEGORY}&token=${SECRET_KEY}`, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(response => {
          return resolve(response);
        });
    });
  }
}
