import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Footer, Header, Seeker, CardWorker } from "components";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
const useStyles = makeStyles(() => ({
  seekerContent: {
    margin: "30px 0 30px 50px",
  },
  cardContent: {
    margin: "40px 50px",
  },
}));

const SearchWorker = () => {
  const show = true;
  const classes = useStyles();
  let { idservicio } = useParams();

  return (
    <React.Fragment>
      <Header show={show} />
      <div className={classes.seekerContent}>
        <Seeker />
      </div>
      <div className={classes.cardContent}>
        <CardWorker />
      </div>
    </React.Fragment>
  );
};

export default SearchWorker;
