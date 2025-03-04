import {createAsyncThunk} from '@reduxjs/toolkit';
import {NewsResponse} from '../../models';
import {fetchMaketingNews} from '../../api/ApiCalls';

export const fetchNews = createAsyncThunk<
  NewsResponse[],
  undefined,
  {rejectValue: any}
>('news/fetchNews', async (_, {fulfillWithValue, rejectWithValue}) => {
  try {
    const response = await fetchMaketingNews();
    return fulfillWithValue(response);
  } catch (error) {
    return rejectWithValue(error);
  }
});
