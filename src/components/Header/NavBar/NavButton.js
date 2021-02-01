import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    signIn:{
        padding:'5px 10px',
        border:'1px solid #59C664',
        color:'#59C664',
        fontSize:'17px',
        margin:'0 20px 0 0',
        borderRadius:'4px',
        background:'none',
        fontFamily: 'Roboto, sans-serif',
        transition:'.4s',
        "&:hover":{
            background:'#59C664',
            cursor: 'pointer',
            color:'white'
        }
    },
    signUp:{
        padding:'5px 15px',
        border:'1px solid #59C664',
        background:'#59C664',
        color:'white',
        fontSize:'17px',
        margin:'0 25px 0 0',
        borderRadius:'4px',
        fontFamily: 'Roboto, sans-serif',
        transition:'.4s',
        "&:hover":{
            cursor: 'pointer'
        }
    }
}));

const NavButton = () => {
    
    const classes = useStyles();

    return (
        <React.Fragment>
            <button className={classes.signIn}>Iniciar sesión</button>
            <button className={classes.signUp}>Registrarse</button>
        </React.Fragment>
    );
}

export default NavButton;
