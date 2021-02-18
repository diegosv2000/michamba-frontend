import React from "react";
import Cookies from "universal-cookie";
import {
  Home,
  NotFound,
  SignIn,
  SignUp,
  SearchWorker,
  EditProfile,
  DataTarget,
} from "views";
import ContractsRequest from "views/Contracts/ContractsRequest";
import ContractsActive from "views/Contracts/ContractsActives"
import ContractsEliminated from "views/Contracts/ContractsEliminated";

const cookies = new Cookies();
const verificationSignIn = () => {
  if (cookies.get("idusuario")) {
    return true;
  } else {
    return false;
  }
};

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
    path: "/services/:idservicio",
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
    path: "/contract-request",
    component: () => <ContractsRequest />,
    exact: true,
  },
  {
    path: "/contract-active",
    component: () => <ContractsActive />,
    exact: true,
  },
  {
    path: "/contract-terminated",
    component: () => <ContractsEliminated />,
    exact: true,
  },
  {
    path: "*",
    component: () => <NotFound />,
    exact: true,
  },
];

export default routes;
