import { type FC, useEffect, useLayoutEffect, useMemo, useState } from 'react';

import { Spinner } from '../Spinner';

import styles from './styles.module.scss';

type LoadingOverlayProps = {
  loading: boolean;
};

export const LoadingOverlay: FC<LoadingOverlayProps> = (props) => {
  const { loading } = props;

  const [shown, setShown] = useState(loading);

  // fade away without CLS
  useEffect(() => {
    if (shown && !loading) {
      const timerId = setTimeout(() => setShown(false), 300);

      return () => clearTimeout(timerId);
    }

    return;
  }, [loading, shown]);

  useLayoutEffect(() => {
    if (loading) {
      setShown(true);
    }
  }, [loading]);

  const overlayClassName = useMemo(() => {
    return `${styles.overlay} ${!loading ? styles.overlay_transition : ''} ${!shown ? styles.overlay_hidden : ''}`;
  }, [loading, shown]);

  return (
    <div className={overlayClassName}>
      <div className={styles.spinner_center}>
        <Spinner size={80} />
      </div>
    </div>
  );
};
