import { searchDrinks, type DrinkCodes } from '@api';
import { SLICE_KEYS } from '@common/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, HttpStatusCode } from 'axios';

export const getCocktails = createAsyncThunk(
  `${SLICE_KEYS.COCKTAILS}/GET_COCKTAILS`,
  async (drinkCode: DrinkCodes, { rejectWithValue, signal }) => {
    try {
      const { data, status } = await searchDrinks(drinkCode, signal);

      if (status === HttpStatusCode.Ok) {
        return data;
      }

      // TOOD: couldn't fail the API with !200 so not sure what the value could be
      return rejectWithValue(JSON.stringify(data));
    } catch (error) {
      return rejectWithValue((error as AxiosError)?.message);
    }
  },
);
