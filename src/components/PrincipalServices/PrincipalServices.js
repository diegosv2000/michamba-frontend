import React from "react";
import ServiceItem from "./ServiceItem";
import { gasfitero, cerrajero, carpintero } from "images";

const items = [
  { id: 0, name: "GASFITERÍA", img: gasfitero },
  { id: 1, name: "CARPINTERÍA", img: cerrajero },
  { id: 2, name: "CERRAJERÍA", img: carpintero },
];

const PrincipalServices = (props) => {
  return (
    <React.Fragment>
      <ServiceItem nameService="GASFITERÍA" img={gasfitero} rout="/services/5" />
      <ServiceItem nameService="CERRAJERÍA" img={cerrajero} rout="/services/2" />
      <ServiceItem nameService="CARPINTERÍA" img={carpintero} rout="/services/1" />
    </React.Fragment>
  );
};

export default PrincipalServices;
