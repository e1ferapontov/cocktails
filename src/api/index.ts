import axios, { type GenericAbortSignal } from 'axios';

import type { DrinkCodes, DrinksResponse } from './types';

export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const searchDrinks = (code: DrinkCodes, signal?: GenericAbortSignal) => {
  return apiInstance.get<DrinksResponse>('/search.php', {
    params: {
      s: code,
    },
    signal,
  });
};

export { type Drink, DrinkCodes, INGREDIENTS_KEYS_QTY } from './types';
