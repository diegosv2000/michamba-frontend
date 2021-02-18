import React from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  containerU: {
    width: "150px",
    background: "white",
    boxShadow: "0px 1px 43px rgba(0, 0, 0, 0.08)",
    position: "absolute",
    "& button": {
      width: "100%",
      padding: "7px",
      textAlign: "left",
      background: "none",
      border: "none",
      fontSize: "15px",
      transition: ".2s",
      "&:hover": {
        background: "#F8F8F8",
        cursor: "pointer",
      },
    },
  },
}));

const UserNav = (props) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <React.Fragment>
      <div className={classes.containerU}>
        <button>Inicio</button>
        <button>Editar perfil</button>
        <button>Contratos</button>
        <button>Agregar tarjeta </button>
        <button>Cerrar Sesión</button>
      </div>
    </React.Fragment>
  );
};

export default UserNav;
