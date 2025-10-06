import { DrinkCodes } from '@api';

export const VALID_CODES = Object.values(DrinkCodes);

export const CACHE_TIME_TO_LIVE = 3600; // sec

export enum SLICE_KEYS {
  COCKTAILS = 'cocktails',
}
