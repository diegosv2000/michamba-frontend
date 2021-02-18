import React from "react";
import { makeStyles } from "@material-ui/core";
import NavButton from "./NavBar/NavButton";
import logo from "images/Logo.png";
import { useHistory } from "react-router-dom";
import UserNav from "./NavBar/UserNav";
import Cookies from "universal-cookie";



const useStyles = makeStyles(() => ({
  header: {
    width: "100%",
    height: "70px",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #E5E5E5",
  },
  logoContent: {
    height: "100%",
    border: "none",
    background: "none",
    "& img": {
      height: "100%",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  navBar: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const cookies = new Cookies();
const verificationSignIn = () => {
  if (cookies.get("idusuario")) {
    return true;
  } else {
    return false;
  }
};
const Header = (props) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <header className={classes.header}>
      <button className={classes.logoContent} onClick={() => history.push("/")}>
        <img src={logo} alt="logo" />
      </button>
      {verificationSignIn() ? (
        <nav className={classes.navBar}>{props.show ? <UserNav /> : ""}</nav>
      ) : (
        <nav className={classes.navBar}>{props.show ? <NavButton /> : ""}</nav>
      )}
    </header>
  );
};

export default Header;
