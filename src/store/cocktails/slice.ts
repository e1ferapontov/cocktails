import { createSlice } from '@reduxjs/toolkit';

import type { Drink, DrinkCodes } from '@api';
import { SLICE_KEYS, VALID_CODES } from '@common/constants';

import { getCocktails } from './thunks';

export type Drinks = Record<DrinkCodes, Drink[]>;
type LoadingState = Record<DrinkCodes, boolean>;

export type CocktailsState = {
  isLoading: Record<DrinkCodes, boolean>;
  drinks: Drinks;
};

const initialState: CocktailsState = {
  isLoading: Object.fromEntries(VALID_CODES.map((code) => [code, false])) as LoadingState,
  drinks: Object.fromEntries<Drink[]>(VALID_CODES.map((code) => [code, []])) as Drinks,
};

const cocktailsSlice = createSlice({
  extraReducers: (builder) => {
    builder.addAsyncThunk(getCocktails, {
      pending: (state, { meta }) => {
        const { arg } = meta;

        state.isLoading[arg] = true;
      },
      fulfilled: (state, { payload, meta }) => {
        const { arg } = meta;
        state.drinks[arg] = payload.drinks ?? [];
      },
      settled: (state, { meta }) => {
        const { arg } = meta;

        state.isLoading[arg] = false;
      },
    });
  },
  initialState,
  name: SLICE_KEYS.COCKTAILS,
  reducers: {},
});

export const { actions: COCKTAILS_ACTIONS, reducer: cocktailsReducer } = cocktailsSlice;
export { initialState as cocktailsInitialState };
