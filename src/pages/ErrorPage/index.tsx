import type { FC } from 'react';

export const ErrorPage: FC = (props) => {
  console.log('props', props);
  return <div>404 not found</div>;
};
