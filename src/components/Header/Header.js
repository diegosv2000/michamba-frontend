import React from 'react';
import { makeStyles } from '@material-ui/core';
import NavButton from './NavBar/NavButton';
import logo from 'images/Logo.png';

const useStyles = makeStyles(() => ({
    header:{
        width: '100%',
        height: '70px',
        display:'flex',
        justifyContent:'space-between',
        borderBottom:'1px solid #E5E5E5'
    },
    logoContent:{
        height: '100%',
        "& img":{
            height: '100%'
        }
    },
    navBar:{
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
}));

const Header = () => {
    
    const classes = useStyles();

    return (
        <header className={classes.header}>
            <div className={classes.logoContent}>
                <img src={logo} alt="logo" />
            </div>
            <nav className={classes.navBar}>
                <NavButton  />
            </nav>
        </header>
    );
}

export default Header;
