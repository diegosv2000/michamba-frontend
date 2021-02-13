import React from "react";
import { makeStyles } from "@material-ui/core";
import { Footer, Header, Seeker } from "components";
import PrincipalServices from "components/PrincipalServices/PrincipalServices";
import { worker, worker2, paso1, paso2, paso3 } from "images";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  container: {
    width: "85%",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: "0 0 30px 0",
    borderBottom: "2px solid #E5E5E5",
  },
  container2: {
    width: "85%",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: "0 0 30px 0",
  },
  introduction: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Roboto, sans-serif",
    textAlign: "left",
    width: "650px",
  },
  titleIntroduction: {
    fontSize: "45px",
  },
  infoHome: {
    margin: "20px 0",
    fontSize: "20px",
    color: "#393939",
    width: "90%",
  },
  imgWorker: {
    width: "500px",
    "& img": {
      width: "100%",
    },
  },
  subtitle1: {
    padding: "2px 0 0 4px",
    borderLeft: "3px solid #59C664",
    width: "85%",
    textAlign: "left",
    fontSize: "22px",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
  },
  subtitle2: {
    width: "100%",
    fontSize: "25px",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
  },
  princServItems: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "40px 0",
    width: "100%",
  },
  stepsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: "40px 0 0",
  },
  step: {
    width: "250px",
    display: "flex",
    flexDirection: "column",
    margin: "0 45px",
  },
  stepImg: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "100%",
    },
  },
  stepText: {
    margin: "5px 0",
    color: "#6B6B6B",
    "& b": {
      color: "black",
    },
  },
  youWant: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    margin: "20px 0",
    "& p": {
      textAlign: "left",
      fontSize: "20px",
      fontWeight: "lighter",
      margin: "20px 0",
      textAlign: "justify",
    },
  },
  worker2Img: {
    width: "220px",
    margin: "0 50px 0 0",
    "& img": {
      width: "100%",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const show = true;
  
  return (
    <React.Fragment>
      <Header show={show} />
      <section>
        <div className={classes.container}>
          <div className={classes.introduction}>
            <h2 className={classes.titleIntroduction}>
              Encuentra los mejores servicios para ti
            </h2>
            <p className={classes.infoHome}>
              <b>michamba</b> es un portal en el que podrás solicitar u ofrecer
              servicios básicos como gasfitería, carpintería, cerrajería y
              muchos más. ¿Qué esperas para unirte?
            </p>
            <Seeker />
          </div>
          <div className={classes.imgWorker}>
            <img src={worker} />
          </div>
        </div>
      </section>

      <section>
        <div className={classes.container2}>
          <div className={classes.subtitle1}>PRINCIPALES SERVICIOS</div>
          <div className={classes.princServItems}>
            <PrincipalServices />
          </div>
        </div>
      </section>

      <section id="stepsSection">
        <div className="container2">
          <div className={classes.subtitle2}>
            ENCUENTRA A TU PROFESIONAL DE CONFIANZA EN 3 SIMPLES PASOS
          </div>

          <div className={classes.stepsContainer}>
            <div className={classes.step}>
              <div className={classes.stepImg}>
                <img src={paso1} alt="step" />
              </div>
              <div className={classes.stepText}>
                <b>1.</b> Indicas que servicios requieres
              </div>
            </div>

            <div className={classes.step}>
              <div className={classes.stepImg}>
                <img src={paso2} alt="step" />
              </div>
              <div className={classes.stepText}>
                <b>2.</b> Seleccionas una opción
              </div>
            </div>

            <div className={classes.step}>
              <div className={classes.stepImg}>
                <img src={paso3} alt="step" />
              </div>
              <div className={classes.stepText}>
                <b>3.</b> Contactas con él
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={classes.container2}>
          <div className={classes.youWant}>
            <div className={classes.subtitle1}>
              ¿QUIERES OFRECER TUS SERVICIOS?
            </div>
            <p>
              Sabemos que en estos tiempos debido al covid-19 nada es igual, es
              por eso que en michamba podrás ofrecer tu trabajo teniendo el
              menor contacto físico podible. Registrate gratis aquí.
            </p>
          </div>
          <div className={classes.worker2Img}>
            <img src={worker2} alt="step" />
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
};

export default Home;
