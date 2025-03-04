import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import HomeSlice from '../features/home/HomeSlice';
import LoginSlice from '../features/login/LoginSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['news', 'login'],
};

const reducers = combineReducers({
  login: LoginSlice,
  news: HomeSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
