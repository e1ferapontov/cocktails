import type { FC } from 'react';
import { Outlet } from 'react-router';

import { Header } from '@components/Header';
import { Menu } from '@components/Menu';

import styles from './styles.module.scss';

export const RootLayout: FC = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <Header />
        <Menu />
      </aside>
      <Outlet />
    </div>
  );
};
