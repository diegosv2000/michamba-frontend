import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Header, InputForm } from "components";
import { useHistory } from "react-router-dom";
import axios from "axios";
const useStyles = makeStyles(() => ({
  form: {
    margin: "50px 0",
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
    margin: "15px auto 25px",
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
    padding: "10px 15px",
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

function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const show = false;

  let qs = require("qs");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const SignInValue = (e) => {
    e.preventDefault();
    const user = {
      correo: userData.email,
      password: userData.password,
    };
    console.log("Email: " + user.correo + "\nPass: " + user.password);

    const formData = qs.stringify(user);

    axios
      .post(`https://michamba-recursos.herokuapp.com/login`, formData)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data == "login correcto") {
          history.push("/");
        } else {
          console.log("Usuario duplicado o datos mal ingresados");
        }
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  };
  return (
    <React.Fragment>
      <Header show={show} />
      <section>
        <form className={classes.form} onSubmit={SignInValue}>
          <h2 className={classes.titleForm}>Iniciar Sesión</h2>
          <div className={classes.inputForm}>
            <InputForm
              type="email"
              label="Email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className={classes.inputForm}>
            <InputForm
              type="password"
              label="Contraseña"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className={classes.textForm}>
            <div>¿Aún no tienes una cuenta?</div>
            <button onClick={() => history.push("/SignUp")}>
              Registrate aquí
            </button>
          </div>
          <button className={classes.buttonForm} type="submit">
            Iniciar Sesión
          </button>
        </form>
      </section>
    </React.Fragment>
  );
}

export default SignIn;
