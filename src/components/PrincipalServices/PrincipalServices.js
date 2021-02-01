import React from 'react';
import ServiceItem from './ServiceItem';
import {gasfitero,cerrajero,carpintero} from 'images';

const items = [
  { id:0, name: 'GASFITERÍA', img: gasfitero},
  { id:1, name: 'CARPINTERÍA', img: cerrajero},
  { id:2, name: 'CERRAJERÍA', img: carpintero}
]

const PrincipalServices = props => {
    
    return (
        <React.Fragment>
          <ServiceItem nameService="GASFITERÍA" img={gasfitero}/>
          <ServiceItem nameService="CERRAJERÍA" img={cerrajero}/>
          <ServiceItem nameService="CARPINTERÍA" img={carpintero}/>
        </React.Fragment>
    );
    
}

export default PrincipalServices;
