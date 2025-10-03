import { Fragment, useMemo, type FC } from 'react';
import type { Drink } from '@api';
import styles from './styles.module.scss';
import { getIngredients } from '@common/getIngredients';
import placeholder from '/placeholder.svg';
import { Image } from '../Image';

export const Cocktail: FC<Drink> = (props) => {
  const { idDrink, strDrink, strInstructions, strCategory, strAlcoholic, strGlass, strDrinkThumb, ...rest } = props;

  const ingredients = useMemo(() => getIngredients(rest), [rest]);

  return (
    <article className={styles.container}>
      <div className={styles.img_container}>
        <Image
          src={strDrinkThumb ?? placeholder}
          alt={strDrink}
        />
      </div>

      <div className={styles.card_content}>
        <h2 className={styles.title}>{strDrink}</h2>

        <div className={styles.wrapper}>
          <p className={styles.info}>{strCategory}</p>
          <p className={styles.info}>{strAlcoholic}</p>
          <p className={styles.info}>{strGlass}</p>

          <h3 className={styles.header}>Instructions:</h3>

          <p className={styles.info}>{strInstructions}</p>

          <h3 className={styles.header}>Ingredients:</h3>

          <div className={styles.ingredients_container}>
            {ingredients.map((ingredient, index) => (
              <Fragment key={`${idDrink}_${ingredient.name}_${index}`}>
                <p className={styles.info}>{ingredient.name}</p>
                <p className={styles.info}>{ingredient.measure} </p>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
