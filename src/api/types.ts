export enum DrinkCodes {
  MARGARITA = 'margarita',
  MOJITO = 'mojito',
  A1 = 'a1',
  KIR = 'kir',
}

export type Drink = {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: Nullable<string>;
  strTags: Nullable<string>;
  strVideo: Nullable<string>;
  strCategory: string;
  strIBA: Nullable<string>;
  strAlcoholic: Nullable<string>;
  strGlass: Nullable<string>;
  strImageSource: Nullable<string>;
  strImageAttribution: Nullable<string>;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
  strInstructions: Nullable<string>;
  strInstructionsES: Nullable<string>;
  strInstructionsDE: Nullable<string>;
  strInstructionsFR: Nullable<string>;
  strInstructionsIT: Nullable<string>;
  'strInstructionsZH-HANS': Nullable<string>;
  'strInstructionsZH-HANT': Nullable<string>;
  strDrinkThumb: Nullable<string>;
  strIngredient1: Nullable<string>;
  strIngredient2: Nullable<string>;
  strIngredient3: Nullable<string>;
  strIngredient4: Nullable<string>;
  strIngredient5: Nullable<string>;
  strIngredient6: Nullable<string>;
  strIngredient7: Nullable<string>;
  strIngredient8: Nullable<string>;
  strIngredient9: Nullable<string>;
  strIngredient10: Nullable<string>;
  strIngredient11: Nullable<string>;
  strIngredient12: Nullable<string>;
  strIngredient13: Nullable<string>;
  strIngredient14: Nullable<string>;
  strIngredient15: Nullable<string>;
  strMeasure1: Nullable<string>;
  strMeasure2: Nullable<string>;
  strMeasure3: Nullable<string>;
  strMeasure4: Nullable<string>;
  strMeasure5: Nullable<string>;
  strMeasure6: Nullable<string>;
  strMeasure7: Nullable<string>;
  strMeasure8: Nullable<string>;
  strMeasure9: Nullable<string>;
  strMeasure10: Nullable<string>;
  strMeasure11: Nullable<string>;
  strMeasure12: Nullable<string>;
  strMeasure13: Nullable<string>;
  strMeasure14: Nullable<string>;
  strMeasure15: Nullable<string>;
};

export const INGREDIENTS_KEYS_QTY = 15;

export type DrinksResponse = {
  drinks: Nullable<Drink[]>;
};
