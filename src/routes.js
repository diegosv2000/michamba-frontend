import React from "react";
import { Home, NotFound, SignIn, SignUp } from "views";

const routes = [
  {
    path: "/",
    component: () => <Home />,
    exact: true,
  },
  {
    path: "/SignIn",
    component: () => <SignIn />,
    exact: true,
  },
  {
    path: "/SignUp",
    component: () => <SignUp />,
    exact: true,
  },
  {
    path: "*",
    component: () => <NotFound />,
    exact: true,
  },
];

export default routes;
