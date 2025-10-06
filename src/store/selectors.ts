import { type DrinkCodes } from '@api';

import type { RootState } from './config';

export const selectIsLoading = (state: RootState) => {
  return state.cocktails.isLoading;
};

export const selectDrinks = (state: RootState) => {
  return state.cocktails.drinks;
};

export const selectDrinksByCode = (drinkCode: DrinkCodes) => (state: RootState) => {
  return selectDrinks(state)[drinkCode];
};

export const selectIsLoadingByCode = (drinkCode: DrinkCodes) => (state: RootState) => {
  return selectIsLoading(state)[drinkCode];
};
