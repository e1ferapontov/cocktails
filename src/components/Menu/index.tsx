import { NavLink } from 'react-router';
import styles from './styles.module.scss';
import { VALID_CODES } from '@common/constants';
import type { FC } from 'react';

export const Menu: FC = () => {
  return (
    <nav className={styles.container}>
      {VALID_CODES.map((code) => (
        <NavLink
          className={styles.link}
          key={code}
          to={code}
        >
          {code}
        </NavLink>
      ))}
    </nav>
  );
};
