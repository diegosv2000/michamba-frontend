import { Checkbox, makeStyles } from "@material-ui/core";
import React from "react";
import { Header, InputForm } from "components";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { card } from "images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles(() => ({
  form: {
    margin: "20px 0 0",
    width: "400px",
    height: "350px",
    padding: "40px 0",
    display: "flex",
    flexDirection: "column",
    borderRadius: "15px",
    boxShadow: "0px 0px 20px 0px rgb(0,0,0,.25)",
  },
  titleForm: {
    color: "black",
    margin: "0 0 30px",
    fontSize: "30px",
  },
  inputForm: {
    width: "75%",
    margin: "10px auto 20px",
  },

  textForm: {
    color: "#393939",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
    width: "75%",
    margin: "0 auto",
    "& button": {
      border: "none",
      background: "none",
      color: "#719CF0",
      outline: "none",
      fontSize: "12px",
      "&:hover": {
        cursor: "pointer",
      },
    },
    position: "relative",
    //top: "-20px",
  },
  buttonTCont: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  buttonForm: {
    margin: "20px 0",
    padding: "8px 15px",
    fontSize: "15px",
    fontWeight: "bolder",
    background: "#719CF0",
    border: "1px solid #719CF0",
    borderRadius: "3px",
    color: "white",
    transition: ".4s",
    "&:hover": {
      cursor: "pointer",
    },
  },
  buttonCancel: {
    margin: "20px 30px",
    padding: "8px 15px",
    fontSize: "15px",
    fontWeight: "bolder",
    background: "white",
    border: "1px solid #FF4E4E",
    borderRadius: "3px",
    color: "#FF4E4E",
    transition: ".4s",
    "&:hover": {
      cursor: "pointer",
      background: "#FF4E4E",
      color: "white",
    },
  },
  espacio: {
    margin: "0px 50px 0px 25px",
    width: "70%",
  },
  expirationDate: {
    display: "flex",
    flexDirection: "column",
    width: "75%",
    margin: "20px auto 0",
  },
  expirationTitle: {
    textAlign: "left",
  },
  dateContent: {
    display: "flex",
    justifyContent: "space-between",
    "& div": {
      width: "90%",
      margin: "10px 0",
    },
  },
  target: {
    fontSize: "25px",
    position: "relative",
    top: "15px",
  },
}));

function DataTarget() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />

      <section>
        <form className={classes.form}>
          <h2 className={classes.titleForm}>Asociar Tarjeta</h2>
          <div className={classes.textForm}>
            <InputForm type="number" label="Ingrese el numero de su tarjeta" />
          </div>
          <div className={classes.expirationDate}>
            <div className={classes.expirationTitle}>Fecha de Vencimiento</div>

            <div className={classes.dateContent}>
              <div className={classes.date}>
                <InputForm type="text" label="MM" />
              </div>
              <div className={classes.date}>
                <InputForm type="text" label="YY" />
              </div>
              <div className={classes.date}>
                <InputForm type="text" label="CCV" />
              </div>
              <div className={classes.target}>
                <FontAwesomeIcon icon={faCreditCard} />
              </div>
            </div>
          </div>

          <div className={classes.inputForm}>
            <InputForm type="text" label="Nombre del titular" />
          </div>

          <div className={classes.buttonTCont}>
            <button className={classes.buttonCancel}>Cancelar</button>
            <button className={classes.buttonForm}>Pagar</button>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
}

export default DataTarget;
