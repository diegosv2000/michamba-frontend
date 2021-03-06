import React from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  buttonService: {
    width: "300px",
    display: "flex",
    flexDirection: "column",
    background: "none",
    border: "none",
    "&:hover": {
      borderBottom: "1px solid #E5E5E5",
      cursor: "pointer",
    },
    transition: ".4s",
    margin: "0 30px",
  },
  imgService: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #C5C5C5",
    background: "#E5E5E5",
    transition: ".4s",
    "& img": {
      width: "100%",
    },
  },
  nameService: {
    textAlign: "center",
    fontSize: "15px",
    width: "100%",
    margin: "5px 0",
  },
}));

const ServiceItem = (props) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <button className={classes.buttonService} onClick={()=>{history.push(props.rout)}} >
      <div className={classes.imgService}>
        <img src={props.img} alt="service" />
      </div>
      <div className={classes.nameService}>{props.nameService}</div>
    </button>
  );
};

export default ServiceItem;
