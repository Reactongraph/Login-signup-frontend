import React from 'react';
const App = React.lazy(() => import('../containers/app/App'));
const NotFound = React.lazy(() => import('../components/notFound/NotFound'));
const Login = React.lazy(() => import('../containers/login'));
const Signup = React.lazy(() => import('../containers/signup'));
const Profile = React.lazy(() => import('../containers/profile'));

export const publicRoutes = [
  {
    path: '/',
    component: <App />,
  },
  {
    path: '/login',
    component: <Login />,
  },
  {
    path: '/signup',
    component: <Signup />,
  },
  {
    path: '/profile',
    component: <Profile />,
  },
  {
    path: '*',
    component: <NotFound />,
  },
];
