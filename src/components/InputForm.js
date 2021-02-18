import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  inputContainer: {
    position: "relative",
    width: "100%",
    "& input": {
      display: "block",
      background: "none",
      width: "100%",
      border: "none",
      fontSize: "15px",
      borderBottom: "2px solid #719CF0",
      padding: "10px 0px 5px",
      transition: ".3s",
      color: "#393939",
    },
    "& label": {
      position: "absolute",
      fontSize: "15px",
      transition: "0.5s ease all",
      pointerEvents: "none",
      color: "#393939",
      left: "4px",
      top: "7px",
    },
    "& input:focus": {
      outline: "none",
      color: "#393939",
    },
    "& input:focus~label": {
      top: "-10px",
      left: "0",
      fontSize: "12px",
      color: "#719CF0",
    },
    "& input:valid~label": {
      top: "-10px",
      left: "0",
      fontSize: "12px",
      color: "#719CF0",
      fontWeight: "bolder",
    },
  },
}));

function InputForm(props) {
  const classes = useStyles();
  return (
    <div className={classes.inputContainer}>
      <input type={props.type} onChange={props.onChange} name={props.name} required />
      <label>{props.label}</label>
    </div>
  );
}

export default InputForm;
