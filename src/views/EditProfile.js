import { Checkbox, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Header, InputForm } from "components";
import axios from "axios";

const useStyles = makeStyles(() => ({
  form: {
    margin: "20px 0 0",
    width: "700px",
    padding: "20px 0",
    display: "flex",
    flexDirection: "column",
    borderRadius: "15px",
    boxShadow: "0px 0px 20px 0px rgb(0,0,0,.25)",
  },
  titleForm: {
    color: "black",
    margin: "15px 0 30px",
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
    top: "-20px",
  },
  buttonForm: {
    margin: "20px auto 10px",
    padding: "8px 15px",
    fontSize: "15px",
    fontWeight: "bolder",
    background: " #719CF0",
    border: "1px solid #719CF0",
    borderRadius: "3px",
    color: "white",
    transition: ".4s",
    "&:hover": {
      cursor: "pointer",
      background: "#719CF0",
      border: "1px solid #719CF0",
      color: "white",
    },
  },
  buttonForm_1Content: {
    width: "700px",
    margin: "10px auto 0",
    textAlign: "left",
  },
  buttonForm_1: {
    margin: "20px 0 40px",
    padding: "10px 15px",
    fontSize: "15px",
    fontWeight: "bolder",
    background: " white",
    border: "1px solid #68D07F",
    borderRadius: "3px",
    color: "#68D07F",
    transition: ".4s",
    "&:hover": {
      cursor: "pointer",
      background: "#68D07F",
      border: "1px solid #68D07F",
      color: "white",
    },
  },
  identification: {
    width: "60%",
    border: "none",
    borderBottom: "2px solid #719CF0",
    outline: "none",
  },
  offerServices: {
    width: "700px",
    boxShadow: "0px 0px 20px 0px rgb(0,0,0,.25)",
    margin: "20px auto 75px",
    padding: "30px 0",
    borderRadius: "15px",
  },
  titleServices: {
    fontSize: "30px",
    fontWeight: "bolder",
    textAlign: "left",
    width: "75%",
    margin: "0 auto 30px",
  },
  services: {
    width: "75%",
    margin: "0px auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    "& div": {
      margin: "10px auto 20px",
    },
  },
  buttonCancel: {
    margin: "20px 20px 10px",
    padding: "8px 15px",
    fontSize: "15px",
    fontWeight: "bolder",
    background: "transparent",
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
  genderLabel: {
    fontWeight: "bolder",
    width: "30%",
    borderBottom: "2px solid #719CF0",
    textAlign: "left",
  },
  genderContent: {
    width: "45%",
    borderBottom: "2px solid #719CF0",
    border: "none",
    borderBottom: "2px solid #719CF0",
  },
}));

const EditProfile = () => {
  const classes = useStyles();
  const [showServices, setShowServices] = useState(false);
  const changeVisibility = (e) => {
    e.preventDefault();
    setShowServices(!showServices);
    console.log("Estado: " + showServices);
  };
  const [services, setServices] = useState([]);
  axios.get("https://michamba-recursos.herokuapp.com/getserv").then((res) => {
    setServices(res.data);
  });
  return (
    <React.Fragment>
      <Header show={true} />
      <section>
        <form className={classes.form}>
          <h2 className={classes.titleForm}>Datos Personales</h2>
          <div className={classes.inputForm}>
            <InputForm type="text" label="Nombres" />
          </div>
          <div className={classes.inputForm}>
            <InputForm type="text" label="Apellidos" />
          </div>

          <section className={classes.inputForm}>
            <select className={classes.identification}>
              <option>DNI</option>
              <option>C.E.</option>
              <option>Pasaporte</option>
            </select>

            <InputForm type="number" label="Numero" />
          </section>

          <section className={classes.inputForm}>
            <InputForm type="number" label="Dia" />
            <InputForm type="number" label="Mes" />
            <InputForm type="number" label="Año" />
          </section>
          <section>
            <div className={classes.genderLabel}>Género:</div>
            <select className={classes.genderContent}>
              <option>Masculino</option>
              <option>Femenino</option>
            </select>
          </section>
          <section className={classes.inputForm}>
            <select className={classes.identification}>
              <option>Celular</option>
              <option>Teléfono Fijo</option>
            </select>
            <InputForm type="number" label="Numero" />
            <InputForm type="number" label="Codigo Postal" />
          </section>

          <div className={classes.inputForm}>
            <InputForm type="text" label="Distrito" />
          </div>

          <div className={classes.inputForm}>
            <InputForm type="text" label="Direccion" />
          </div>

          <button className={classes.buttonForm}>Guardar Cambios</button>
        </form>
      </section>

      <div className={classes.buttonForm_1Content}>
        <button className={classes.buttonForm_1} onClick={changeVisibility}>
          Ofrecer Servicios
        </button>
      </div>

      <div
        className={classes.offerServices}
        style={showServices ? { display: "block" } : { display: "none" }}
      >
        <div className={classes.titleServices}>Servicios</div>
        <div className={classes.services}>
          {services.map((e) => {
            return (
              <div key={e.nombre}>
                <Checkbox color="primary" /> {e.nombre}
              </div>
            );
          })}
        </div>
        <div className={classes.buttonsContent}>
          <button className={classes.buttonForm}>Guardar Cambios</button>
          <button className={classes.buttonCancel}>Cancelar</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditProfile;
