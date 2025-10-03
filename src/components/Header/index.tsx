import { Link } from 'react-router';
import logo from '/favicon.svg';
import styles from './styles.module.scss';
import type { FC } from 'react';

export const Header: FC = () => {
  return (
    <Link
      className={styles.container}
      to='/'
    >
      <img
        src={logo}
        draggable={false}
        className={styles.logo}
        alt='Cocktails logo'
      />
      <span className={styles.header}>Cocktails</span>
    </Link>
  );
};
