import React from "react";
import { Card, Container, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Logo, Male, Female, StarYellow, StarGray } from "images";
const useStyles = makeStyles(() => ({
  card: {
    width: "320px",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    boxShadow:'0px 5px 20px 0px rgb(0,0,0,0.25)',
    borderRadius: "5px",

  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    background: "#71BBF0",
    height: "80px",
    borderRadius: "5px 5px 0 0",
  },
  imgContent: {
    height: "100px",
    position: "relative",
    top: "25px",
    left: "20px",
    "& img": {
      height: "100%",
    },
  },
  infoHeaderCard: {
    display: "flex",
    flexDirection: "column",
    margin: "0 10px",
  },
  logoContent: {
    width: "150px",
    margin: "0 auto",
    "& img": {
      width: "100%",
    },
  },
  nameWorker: {
    fontSize: "18px",
    fontWeight: "bolder",
    color: "white",
    position: "relative",
    top: "-8px",
    textAlign: "center",
  },
  lnameWorker: {
    fontSize: "18px",
    fontWeight: "bolder",
    color: "white",
    position: "relative",
    top: "-8px",
    textAlign: "center",
  },
  containerCard: {
    display: "flex",
    justifyContent: "space-between",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    position:'relative',
    left:'17px',
    top:'55px',
    "& img": {
      height: "25px",
    },
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    margin: "5px 10px",
    "& div": {
      fontSize: "15px",
      fontWeight: "bolder",
      color: "#20577D",
      textAlign: "left",
      padding: "0  0 1px 0",
      borderBottom: "1px solid #71BBF0",
    },
    "& button": {
      padding:'7px 12px',
      margin:'0  0 0 auto',
      background:'#71BBF0 ',
      borderRadius:'4px',
      border:'none',
      color:'white',
      fontSize:'16px',
      fontWeight:'bolder',

      position:'relative',
      top:'15px',
      "&:hover":{
        cursor:'pointer'
      }
    },
  },
}));

const CardWorker = (props) => {
  const show = true;
  const history = useHistory();
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <div className={classes.imgContent}>
          <img src={Male} />
        </div>
        <div className={classes.infoHeaderCard}>
          <div className={classes.logoContent}>
            <img src={Logo} />
          </div>
          <div className={classes.nameWorker}>{props.name}</div>
          <div className={classes.lnameWorker}>{props.lname}</div>
        </div>
      </div>
      <div className={classes.containerCard}>
        <div className={classes.stars}>
          <img src={StarYellow} />
          <img src={StarYellow} />
          <img src={StarYellow} />
          <img src={StarYellow} />
          <img src={StarGray} />
        </div>
        <div className={classes.infoCard}>
          <div>Edad: {props.age}</div>
          <div>Distrito: {props.district}</div>
          <button onClick={()=>{history.push("/contract-request")}}>Contactar</button>
        </div>
      </div>
    </div>
  );
};

export default CardWorker;
