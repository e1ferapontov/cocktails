import { type FC, type ImgHTMLAttributes, useState } from 'react';

import styles from './styles.module.scss';

export const Image: FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  const { src, ...rest } = props;

  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.img_wrapper}>
      <img
        {...rest}
        loading='lazy'
        src={src}
        onLoad={() => setLoaded(true)}
      />

      <div className={`${styles.img_placeholder} ${loaded ? styles.img_placeholder_hidden : ''}`} />
    </div>
  );
};
