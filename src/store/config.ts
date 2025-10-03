import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import expireReducer from 'redux-persist-expire';
import { CACHE_TTL_SEC, SLICE_KEYS } from '@common/constants';
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
        expireSeconds: CACHE_TTL_SEC,
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
