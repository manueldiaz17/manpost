import React from "react";

import Header from "../components/Header";
import Formulario from "../components/SetProducto/Formulario";
const SetProducto = () => {

    
  return (
    <React.Fragment>
      <Header />
      <div className="SetProducto__page">
        <div className="setProducto__container">
          <Formulario />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SetProducto;
