import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import UserMenu from "./UserMenu/UserMenu";
import { useHistory } from "react-router-dom";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Male } from "images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "universal-cookie";
import axios from "axios";
const useStyles = makeStyles(() => ({
  userNavegation: {
    border: "none",
    background: "none",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  imgContent: {
    width: "40px",
    "& img": {
      width: "100%",
    },
  },
  userName: {
    fontSize: "20px",
    fontWeight: "40px",
    margin: "0 10px 0 20px",
  },
}));

const cookies = new Cookies();

const UserNav = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const idusuario = cookies.get("idusuario");
  const [name, setName] = useState("");
  axios.post("https://michamba-recursos.herokuapp.com/nombre", `idusuario=${idusuario}`).then((res) => {
    if (res.data != "no existe usuario") {
      setName(res.data);
    } else {
      console.log("no existe");
    }
  });
  return (
    <React.Fragment>
      <button
        className={classes.userNavegation}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <div className={classes.imgContent}>
          <img src={Male} />
        </div>
        <div className={classes.userName}>
          {name} <FontAwesomeIcon icon={faCaretDown} />{" "}
        </div>
      </button>
      <UserMenu show={showMenu} />
    </React.Fragment>
  );
};

export default UserNav;
