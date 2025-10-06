import type { FC } from 'react';
import styles from './styles.module.scss';

export const ErrorPage: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>404</h2>
      <p className={styles.text}>That's definitely not what you're looking for</p>
    </div>
  );
};
