import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@store';

import { router } from './navigation/index.tsx';

import './main.scss';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate
      loading={null}
      persistor={persistor}
    >
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>,
);
