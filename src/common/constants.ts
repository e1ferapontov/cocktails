import { DrinkCodes } from '@api';

export const VALID_CODES = Object.values(DrinkCodes);

export const CACHE_TTL_SEC = 3600;

export enum SLICE_KEYS {
  COCKTAILS = 'cocktails',
}
