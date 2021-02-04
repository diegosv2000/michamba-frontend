import React from 'react';
import { Home, SignIn, SignUp } from 'views';

const routes = [
  {
    path: '/',
    component: () => <Home />,
    exact: true,
  },
  {
    path: '/SignIn',
    component: () => <SignIn />,
    exact: true,
  },
  {
    path: '/SignUp',
    component: () => <SignUp />,
    exact: true,
  },
];

export default routes;
