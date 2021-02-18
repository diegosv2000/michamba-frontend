import React from "react";
import {
  Home,
  NotFound,
  SignIn,
  SignUp,
  SearchWorker,
  EditProfile,
  DataTarget
} from "views";

const routes = [
  {
    path: "/",
    component: () => <Home />,
    exact: true,
  },
  {
    path: "/sign-in",
    component: () => <SignIn />,
    exact: true,
  },
  {
    path: "/sign-up",
    component: () => <SignUp />,
    exact: true,
  },
  {
    path: "/id_servicio=?:idservicio",
    component: () => <SearchWorker />,
    exact: true,
  },

  {
    path: "/profile",
    component: () => <EditProfile />,
    exact: true,
  },
  {
    path: "/credit-card",
    component: () => <DataTarget />,
    exact: true,
  },
  {
    path: "*",
    component: () => <NotFound />,
    exact: true,
  },
];

export default routes;
