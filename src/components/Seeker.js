import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles(() => ({
  seekerContent:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    "& select":{
      width:'300px',
      padding:'2px',
      border:'1px solid #C5C5C5',
      borderRadius:'3px',
      outline:'none',
      fontSize:'15px'
    }
  },
  buttonSeeker:{
    padding:'5px 20px',
    fontSize:'15px',
    border:'1px solid #71BBF0',
    background:'none',
    color:'#71BBF0',
    borderRadius:'4px',
    transition:'.4s',
    margin:'0 0 0 20px',
    "&:hover":{
      background:'#71BBF0',
      color:'white',
      cursor:'pointer'
    }
  }
}));

const Home = () => {
    
    const classes = useStyles();
    const history = useHistory();
    return (
        <div className={classes.seekerContent}>
          <select>
            <option>Selecciona una opción</option>
            <option>Albañil</option>
            <option>Carpintero</option>
            <option>Obrero de C.V.</option>
            <option>Gasfitero</option>
            <option>Mucama</option>
            <option>Personal de Limpieza</option>
            <option>Cerrajero</option>
            <option>Pintor</option>
            <option>Electricista</option>
            <option>Mecánico</option>
            <option>Enfermero</option>
          </select>
          <button onClick={() => history.push("/SearchWorker/search=gasfitero")} className={classes.buttonSeeker}>Buscar</button>
        </div>
    );
}

export default Home;
