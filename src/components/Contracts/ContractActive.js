import { makeStyles } from "@material-ui/core";
import React from "react";
import { Header, InputForm } from "components";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  form: {
    margin: "100px auto",
    width: "40%",
    padding: "40px 0",
    display: "flex",
    flexDirection: "column",
    borderRadius: "15px",
    boxShadow: "0px 0px 20px 0px rgb(0,0,0,.25)",
    backgroundColor: "#F8F8F8",
  },

  inputForm: {
    width: "75%",
    margin: "15px auto 25px",
  },
  title: {
    color: "black",
    margin: "30px 0 0 60px",
    fontSize: "50px",
    width: "100%",
    display: "flex",
  },
  titleForm: {
    //color: "black",
    margin: "40px 0 40px 60px",
    //fontSize: "30px",
    width: "100%",
    display: "flex",
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
    margin: "20px 30px 20px 40px",
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
  container: {
    width: "100%",
    display: "flex",
    border: "1px solid #6B6B6B",
    borderRadius: "10px",
    backgroundColor: "#EEF2FF",
    padding: "10px",
  },
  accordion: {
    border: "1px solid #6B6B6B",
    borderRadius: "10px",
    backgroundColor: "#EEF2FF",
    padding: "10px",
    margin: "10px 0",
  },
  lineDiv:{
    width:'75%',
    height:'1px',
    background:'#c4c4c4',
    margin:'20px auto'
  }
}));

function ContractActive() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div>
        <div className={classes.accordion}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.container}>
                <form className={classes.form}>
                  <div className={classes.tittleForm}>
                    <h1>Cliente</h1>
                  </div>
                  <div className={classes.inputForm}>
                    <InputForm type="text" label="Nombre" />
                  </div>
                  <div className={classes.inputForm}>
                    <InputForm type="text" label="Titulo" />
                  </div>
                  <div className={classes.inputForm}>
                    <InputForm type="textarea" multiline label="Descripcion" />
                  </div>
                  <div>
                    <button className={classes.buttonForm}>Finalizar</button>
                    <button className={classes.buttonForm}>Cancelar</button>
                  </div>
                  <div className={classes.lineDiv}></div>
                  <div className={classes.tittleForm}>
                    <h1>Trabajador</h1>
                  </div>
                  <div className={classes.inputForm}>
                    <InputForm type="text" label="Nombre" />
                  </div>
                  <div className={classes.inputForm}>
                    <InputForm type="text" label="Propuesta (S/.)" />
                  </div>
                  <div>
                    <button className={classes.buttonForm}>Finalizar</button>
                    <button className={classes.buttonForm}>Cncelar</button>
                  </div>
                </form>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContractActive;
