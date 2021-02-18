import React from "react";
import { makeStyles } from "@material-ui/core";
import NavButton from "./NavBar/NavButton";
import UserNav from "./NavBar/UserNav";
import logo from "images/Logo.png";
import { useHistory } from "react-router-dom";

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

const Header = (props) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <header className={classes.header}>
      <button className={classes.logoContent} onClick={() => history.push("/")}>
        <img src={logo} alt="logo" />
      </button>
      <nav className={classes.navBar}>{props.show ? <NavButton /> : ""}</nav>
      {/* <UserNav /> */}
    </header>
  );
};

export default Header;
