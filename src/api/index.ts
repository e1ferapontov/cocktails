import axios, { type GenericAbortSignal } from 'axios';
import type { DrinkCodes, DrinksResponse } from './types';

export const apiInstance = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
});

export const searchDrinks = (code: DrinkCodes, signal?: GenericAbortSignal) => {
  return apiInstance.get<DrinksResponse>('/search.php', {
    params: {
      s: code,
    },
    signal,
  });
};

export { DrinkCodes, type Drink } from './types';
