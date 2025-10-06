import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import expireReducer from 'redux-persist-expire';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { CACHE_TIME_TO_LIVE, SLICE_KEYS } from '@common/constants';

import { cocktailsInitialState, cocktailsReducer } from './cocktails/slice';

const rootReducer = combineReducers({
  [SLICE_KEYS.COCKTAILS]: cocktailsReducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
    transforms: [
      expireReducer(SLICE_KEYS.COCKTAILS, {
        persistedAtKey: '__persisted_at',
        expireSeconds: CACHE_TIME_TO_LIVE,
        expiredState: cocktailsInitialState,
        autoExpire: true,
      }),
    ],
  },
  rootReducer,
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
