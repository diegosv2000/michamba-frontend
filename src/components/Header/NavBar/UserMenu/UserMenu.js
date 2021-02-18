import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";

const useStyles = makeStyles(() => ({
  containerU: {
    width: "150px",
    background: "white",
    boxShadow: "0px 1px 43px rgba(0, 0, 0, 0.08)",
    position: "absolute",
    top: "60px",
    right: "20px",
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
  contractsButtons: {
    width: "200px",
    background: "white",
    boxShadow: "0px 1px 43px rgba(0, 0, 0, 0.08)",
    position: "absolute",
    top: "62px",
    right: "150px",
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
  const cookies = new Cookies();
  const signOut = () => {
    cookies.remove("idusuario");
    history.push("/");
    window.location.reload(true);
  };
  const [showContracts, setShowContracts] = useState(false);
  return (
    <React.Fragment>
      <div
        className={classes.containerU}
        style={props.show ? { display: "block" } : { display: "none" }}
      >
        <button
          onClick={() => {
            history.push("/");
          }}
        >
          Inicio
        </button>
        <button
          onClick={() => {
            history.push("/profile");
          }}
        >
          Editar perfil
        </button>
        <button
          onClick={() => {
            setShowContracts(!showContracts);
          }}
          className="contracts"
        >
          Contratos
        </button>
        <div
          className={classes.contractsButtons}
          style={showContracts ? { display: "block" } : { display: "none" }}
        >
          <button onClick={() => history.push("/contract-request")}>
            Solicitudes de Contratos
          </button>
          <button onClick={() => history.push("/contract-active")}>
            Contratos Activos
          </button>
          <button onClick={() => history.push("/contract-terminated")}>
            Contratos Eliminados
          </button>
        </div>
        <button
          onClick={() => {
            history.push("/credit-card");
          }}
        >
          Agregar tarjeta{" "}
        </button>
        <button onClick={signOut}>Cerrar Sesión</button>
      </div>
    </React.Fragment>
  );
};

export default UserNav;
