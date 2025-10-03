import type { DrinkCodes } from '@api';
import { Cocktail } from '@components/Cocktail';
import { LoadingOverlay } from '@components/LoadingOverlay';
import { cocktailsThunks, selectDrinksByCode, selectIsLoadingByCode, useAppDispatch, useAppSelector } from '@store';
import { useEffect, useLayoutEffect, type FC } from 'react';
import styles from './styles.module.scss';

export const CocktailsPage: FC<{ drinkCode: DrinkCodes }> = (props) => {
  const { drinkCode } = props;

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoadingByCode(drinkCode));
  const drinks = useAppSelector(selectDrinksByCode(drinkCode));

  useEffect(() => {
    if (!drinks.length) {
      const promise = dispatch(cocktailsThunks.getCocktails(drinkCode));

      return () => {
        promise.abort();
      };
    }

    return;
  }, [dispatch, drinkCode, drinks]);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [drinkCode]);

  return (
    <div className={styles.container}>
      <LoadingOverlay loading={isLoading} />
      {drinks.map((drink) => (
        <Cocktail
          key={drink.idDrink}
          {...drink}
        />
      ))}
    </div>
  );
};
