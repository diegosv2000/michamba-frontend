import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Header, InputForm } from "components";
import { useHistory } from "react-router-dom";
import axios from "axios";
const useStyles = makeStyles(() => ({
  form: {
    margin: "20px 0 0",
    width: "380px",
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
    top: "-20px",
  },
  buttonForm: {
    margin: "20px auto 10px",
    padding: "8px 15px",
    fontSize: "15px",
    fontWeight: "bolder",
    background: "white",
    border: "1px solid #719CF0",
    borderRadius: "3px",
    color: "#719CF0",
    transition: ".4s",
    "&:hover": {
      cursor: "pointer",
      background: "#719CF0",
      border: "1px solid #719CF0",
      color: "white",
    },
  },
}));

function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const show = false;
  const [userData, setUserData] = useState({
    dni: "",
    name: "",
    lname: "",
    password: "",
    email: "",
    password: "",
    nick: "---",
    bank: " ",
    district: " ",
  });
  let qs = require("qs");
  const handleChangeDate = (e) => {
    e.preventDefault();
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const SignUpValue = (e) => {
    e.preventDefault();
    const user = {
      dni: userData.dni,
      nombre: userData.name,
      apellido: userData.lname,
      correo: userData.email,
      password: userData.password,
      nick: userData.nick,
      cuenta_int: userData.bank,
      distrito: userData.district,
    };
    const formData = qs.stringify(user);
    axios
      .post("https://michamba-recursos.herokuapp.com/registro", formData)
      .then((res) => {
        if (res.data == "usuario añadido") {
          history.push("/sign-in");
        } else {
          alert("Revisa bien los datos");
        }
      });
  };
  return (
    <React.Fragment>
      <Header show={show} />
      <section>
        <form className={classes.form} onSubmit={SignUpValue}>
          <h2 className={classes.titleForm}>Registrarse</h2>
          <div className={classes.inputForm}>
            <InputForm
              type="number"
              label="DNI"
              name="dni"
              onChange={handleChangeDate}
            />
          </div>
          <div className={classes.inputForm}>
            <InputForm
              type="text"
              label="Nombres"
              name="name"
              onChange={handleChangeDate}
            />
          </div>
          <div className={classes.inputForm}>
            <InputForm
              type="text"
              label="Apellidos"
              name="lname"
              onChange={handleChangeDate}
            />
          </div>
          <div className={classes.inputForm}>
            <InputForm
              type="email"
              label="Email"
              name="email"
              onChange={handleChangeDate}
            />
          </div>
          <div className={classes.inputForm}>
            <InputForm
              type="password"
              label="Contraseña"
              name="password"
              onChange={handleChangeDate}
            />
          </div>
          <div className={classes.textForm}>
            <div>¿Ya tienes una cuenta?</div>
            <button onClick={() => history.push("/sign-in")}>
              Inicia Sesión aquí
            </button>
          </div>
          <button type="submit" className={classes.buttonForm}>
            Registrarse
          </button>
        </form>
      </section>
    </React.Fragment>
  );
}

export default SignUp;
