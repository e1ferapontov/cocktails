import { createRoot } from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { RouterProvider } from 'react-router';
import { router } from './navigation/index.tsx';
import { Provider } from 'react-redux';
import { store, persistor } from '@store';

import './index.css';

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
