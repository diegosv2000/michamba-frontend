import { Checkbox, makeStyles } from "@material-ui/core";
import React from "react";
import { Header, InputForm } from "components";

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
  buttonForm_1: {
    margin: "20px auto 10px",
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
  offerServices:{
    width:'700px',
    boxShadow: "0px 0px 20px 0px rgb(0,0,0,.25)",
    margin:'20px auto',
    padding:'30px 0',
    borderRadius:'15px'

  },
  titleServices:{
    fontSize:'30px',
    fontWeight:'bolder',
    textAlign:'left',
    width:'75%',
    margin:'0 auto 30px'
  },
  services:{
    width:'75%',
    margin:'0px auto',
    border:'1px solid red'
  }
}));

function EditProfile() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
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

          <section className={classes.inputForm}>
            <select className={classes.identification}>
              <option>Celular</option>
              <option>Teléfono Fijo</option>
            </select>
            <InputForm type="Numero" label="Numero" />
            <InputForm type="Codigo Postal" label="Codigo Postal" />
          </section>

          <div className={classes.inputForm}>
            <InputForm type="Distrito" label="Distrito" />
          </div>

          <div className={classes.inputForm}>
            <InputForm type="Direccion" label="Direccion" />
          </div>

          <button className={classes.buttonForm}>Guardar Cambios</button>
        </form>
      </section>

      <button className={classes.buttonForm_1}>Ofrecer Servicios</button>
      <div className={classes.offerServices}>
        <div className={classes.titleServices}>Servicios</div>
        <div className={classes.services}>
          <div><Checkbox color="primary" /> Gasfitería</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EditProfile;
