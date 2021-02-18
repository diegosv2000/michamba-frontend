import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles(() => ({
  seekerContent: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    "& select": {
      width: "300px",
      padding: "3px",
      border: "1px solid #C5C5C5",
      background: "white",
      borderRadius: "3px",
      outline: "none",
      fontSize: "15px",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  buttonSeeker: {
    padding: "5px 20px",
    fontSize: "15px",
    border: "1px solid #71BBF0",
    background: "none",
    color: "#71BBF0",
    borderRadius: "4px",
    transition: ".4s",
    margin: "0 0 0 20px",
    "&:hover": {
      background: "#71BBF0",
      color: "white",
      cursor: "pointer",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const [services, setServices] = useState([]);
  let isTrue =useRef(true);
  useEffect(() => {
    getWorkers();
    return () => {
      isTrue.current=false;
    }
  }, [services]);

  const getWorkers = () =>{
    if(isTrue){
       axios
      .get("https://michamba-recursos.herokuapp.com/getserv")
      .then((res) => {
        setServices(res.data);
      });
    }
  }

  const searchWorker = (e) => {
    e.preventDefault();
    history.push(`/id_servicio=?:${"hola"}`);
  };
  return (
    <form className={classes.seekerContent}>
      <select className={classes.select}>
        <option>Selecciona una opción</option>
        {services.map((e) => {
          return <option key={e.nombre}>{e.nombre}</option>;
        })}
      </select>
      <button onClick={searchWorker} className={classes.buttonSeeker}>
        Buscar
      </button>
    </form>
  );
};

export default Home;
