import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Header, Seeker, CardWorker } from "components";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
const useStyles = makeStyles(() => ({
  seekerContent: {
    margin: "30px 0 30px 50px",
  },
  workersContent: {
    width: "95%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
  },
  cardContent: {
    margin: "20px",
  },
  notfound: {
    color: "#FF4E4E",
    fontSize: "15px",
  },
}));

const SearchWorker = () => {
  const show = true;
  const classes = useStyles();
  const history = useHistory();
  let { idservicio } = useParams();

  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    axios
      .post(
        "https://michamba-recursos.herokuapp.com/consultaworker",
        `idservicio=${idservicio}`
      )
      .then((res) => {
        setWorkers(res.data);
      });
  }, [idservicio]);

  return (
    <React.Fragment>
      <Header show={show} />
      <div className={classes.seekerContent}>
        <Seeker />
      </div>
      <div className={classes.workersContent}>
        {workers.length == 0 ? (
          <div className={classes.notfound}>
            No hay se encontraron trabajadores disponibles.
          </div>
        ) : (
          workers.map((e) => {
            return (
              <div className={classes.cardContent} key={e.idusuario}>
                <CardWorker
                  name={e.nombre}
                  lname={e.apellido}
                  age={e.edad}
                  district={e.distrito}
                />
              </div>
            );
          })
        )}
      </div>
    </React.Fragment>
  );
};

export default SearchWorker;
