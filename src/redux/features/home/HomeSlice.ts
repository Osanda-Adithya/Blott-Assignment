import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NewsResponse} from '../../../models';
import {fetchNews} from '../../repositories/Repositoires';

type InitialStateType = {
  error?: string;
  data?: NewsResponse[];
};

const initialState: InitialStateType = {
  error: undefined,
  data: undefined,
};

const HomeSlice = createSlice({
  initialState: initialState,
  name: 'news',
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNews.pending, state => {
        state.error = undefined;
        state.data = [];
      })
      .addCase(
        fetchNews.fulfilled,
        (state, {payload}: PayloadAction<NewsResponse[]>) => {
          state.data = payload;
        },
      )
      .addCase(fetchNews.rejected, (state, {payload}) => {
        state.data = [];
        state.error = payload;
      });
  },
});

export default HomeSlice.reducer;
