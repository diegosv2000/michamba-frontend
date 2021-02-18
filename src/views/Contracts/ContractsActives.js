import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Header, InputForm } from "components";
import { useHistory } from "react-router-dom";
import ContractRequest from "components/Contracts/ContractRequest";
import axios from "axios";
const useStyles = makeStyles(() => ({
  section: {
    display: "flex",
    flexDirection: "column",
  },
  titleContract: {
    width: "80%",
    padding: "0px 0 5px 10px",
    borderLeft: "3px solid #68D07F",
    fontSize: "25px",
    fontWeight: "bolder",
    textAlign: "left",
    margin: "20px auto",
  },
  contracts: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    margin: "0 auto",
  },
}));

const ContractsActive = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <React.Fragment>
      <Header show={true} />
      <section className={classes.section}>
        <div className={classes.titleContract}>Activos</div>
        <div className={classes.contracts}>
          <ContractRequest />
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContractsActive ;
