// based on https://github.com/icarus-sullivan/react-spinner-material

import { useMemo, type FC } from 'react';
import styles from './styles.module.scss';

type SpinnerProps = Omit<React.HTMLProps<HTMLDivElement>, 'size'> & {
  size?: number;
};

const DEFAULT_STROKE = 3.6;
const DEFAULT_SIZE = 44;

export const Spinner: FC<SpinnerProps> = (props) => {
  const { size = DEFAULT_SIZE, className, style, ...rest } = props;

  const memoizedStyle = useMemo(() => {
    const calculatedStroke = `${(size / (DEFAULT_SIZE / DEFAULT_STROKE)).toFixed(3)}px`;

    return {
      width: size,
      height: size,
      borderWidth: calculatedStroke,
      ...style,
    };
  }, [size, style]);

  return (
    <div
      {...rest}
      className={[styles.react_spinner_material, className].join(' ')}
      style={memoizedStyle}
    />
  );
};

export default Spinner;
