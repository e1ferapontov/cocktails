import { Outlet } from 'react-router';
import styles from './styles.module.scss';
import type { FC } from 'react';
import { Menu } from '@components/Menu';
import { Header } from '@components/Header';

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
