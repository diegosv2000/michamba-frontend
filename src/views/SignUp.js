import { makeStyles } from "@material-ui/core";
import React from "react";
import { InputForm } from "components";
const useStyles = makeStyles(() => ({
  form:{
    margin:'20px 0 0',
    width:'380px',
    padding:'40px 0',
    display:'flex',
    flexDirection:'column',
    borderRadius:'15px',
    boxShadow:'0px 0px 20px 0px rgb(0,0,0,.25)'
  },
  titleForm:{
    color:'black',
    margin:'0 0 30px',
    fontSize:'30px'
  },
  inputForm:{
    width:'75%',
    margin:'10px auto 25px'
  },
  textForm:{
    color:'#393939',
    fontSize:'12px',
    display:'flex',
    justifyContent:'space-between',
    width:'75%',
    margin:'0 auto',
    "& button":{
      border:'none',
      background:'none',
      color:'#719CF0',
      outline:'none',
      fontSize:'12px',
      "&:hover":{
        cursor:'pointer'
      }
    },
    position:'relative',
    top:'-20px'
  },
  buttonForm:{
    margin:'20px auto 10px',
    padding:'8px 15px',
    fontSize:'15px',
    fontWeight:'bolder',
    background:'white',
    border:'1px solid #719CF0',
    borderRadius:'3px',
    color:'#719CF0',
    transition:'.4s',
    "&:hover":{
      cursor:'pointer',
      background:'#719CF0',
      border:'1px solid #719CF0',
      color:'white'
    }
  }
}));

function SignUp() {
  const classes = useStyles();
  return (
    <section>
      <form className={classes.form}>
        <h2 className={classes.titleForm}>Registrarse</h2>
        <div className={classes.inputForm}>
          <InputForm type="text" label="Nombres" />
        </div>
        <div className={classes.inputForm}>
          <InputForm type="text" label="Apellidos" />
        </div>
        <div className={classes.inputForm}>
          <InputForm type="email" label="Email" />
        </div>
        <div className={classes.inputForm}>
          <InputForm type="password" label="Contraseña" />
        </div>
        <div className={classes.inputForm}>
          <InputForm type="password" label="Confirmar Contraseña" />
        </div>
        <div className={classes.textForm}>
          <div>¿Ya tienes una cuenta?</div>
          <button>Inicia Sesión aquí</button>
        </div>
        <button className={classes.buttonForm}>Registrarse</button>
      </form>
    </section>
  );
}

export default SignUp;
