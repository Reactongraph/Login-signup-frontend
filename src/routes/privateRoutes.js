import React from 'react';
const App = React.lazy(() => import('../containers/app/App'));

export const privateRoutes = [
  {
    path: '/',
    component: <App />,
  },
];
