import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { makeStyles } from '@material-ui/core';
import {LogoBN} from 'images';

const useStyles = makeStyles(() => ({
  footer:{
    width:'100%',
    display:'flex',
    justifyContent:'center',
    padding:'0 0 20px 0'
  },
  footerContainer:{
    borderTop:' 1px solid #C4C4C4',
    width:'85%',
    display:'flex',
    justifyContent:'space-between',
    "& div":{
      height:'50px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      margin:'5px 0'
    }
  },
  logoFooter:{
    height:'100%'
  },
  copyright:{
    fontSize:'15px'
  },
  socialNetworks:{
    fontSize:'20px',
    color:'#6B6B6B',
    margin:'0 10px'
    
  }
}));

const Footer = () => {
    
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
          <div className={classes.footerContainer} >
            <div>
              <img className={classes.logoFooter} src={LogoBN} />
            </div>

            <div className={classes.copyright}> &copy; michamba  2021. Todos los derechos reservados</div>
            
            <div >
              <a className={classes.socialNetworks} href="#" target="_blank"><FontAwesomeIcon icon={faFacebookF}  /></a>
              <a className={classes.socialNetworks} href="#" target="_blank"><FontAwesomeIcon icon={faInstagram}  /></a>
              <a className={classes.socialNetworks} href="#" target="_blank"><FontAwesomeIcon icon={faTwitter}  /></a>
            </div>
          </div>

        </footer>
    );
}

export default Footer;
