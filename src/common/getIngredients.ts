import { type Drink, INGREDIENTS_KEYS_QTY } from '@api';

export type Ingredient = {
  name: string;
  measure: string;
};

const measureFallback = 'To taste';

export const getIngredients = (drink: Partial<Drink>): Ingredient[] => {
  const ingredients = [];

  for (let i = 1; i <= INGREDIENTS_KEYS_QTY; i++) {
    const name = drink[`strIngredient${i}` as keyof Drink];

    if (!name) {
      break;
    }

    const measure = drink[`strMeasure${i}` as keyof Drink] ?? measureFallback;

    ingredients.push({ name, measure });
  }

  return ingredients;
};
