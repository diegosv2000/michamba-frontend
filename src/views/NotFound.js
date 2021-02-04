import { makeStyles } from '@material-ui/core';
import React from 'react';
import notFound from 'images/NotFound.png';

const useStyles = makeStyles(()=>({
  notFound:{
    height:'100vh',
    width:'100%',
    "& img":{
      width:'100%',
      height:'100%'
    }
  }


}));

const Lists = () => {
  const classes = useStyles();
  return (
      <div className={classes.notFound}>
        <img src={notFound} alt="not Found"/>
      </div>
    
  );
}

export default Lists;
