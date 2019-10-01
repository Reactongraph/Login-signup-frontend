import React from 'react';
const App = React.lazy(() => import('../containers/app/App'));
const NotFound = React.lazy(() => import('../components/notFound/NotFound'));
const Login = React.lazy(() => import('../containers/login'));
const Signup = React.lazy(() => import('../containers/signup'));
const Profile = React.lazy(() => import('../containers/profile'));

export const publicRoutes = [
  {
    path: '/',
    exact: true,
    component: App
  },
  {
    path: '/login',
    exact: true,
    component: Login
  },
  {
    path: '/signup',
    exact: true,
    component: Signup
  },
  {
    path: '/profile',
    exact: true,
    component: Profile
  },
  {
    path: '*',
    exact: true,
    component: NotFound
  }
];
