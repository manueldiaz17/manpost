import React, { useState } from "react";
import { TranslatorProvider } from "react-translate";
import AuthProvaider from "../../context/AuthContext";
import { AuthConsumer } from "../../context/AuthContext";

import FormularioLabel from "../SetProducto/FormularioLabel";
import FormularioTitulo from "../SetProducto/FormularioTitulo";
import FormularioButton from "../SetProducto/FormularioButton";
function Formulario() {
  const [dataproducto, setDataproducto] = useState({
    nombre: "",
    categoria: "",
    cantidad: "",
    valor: ""
  });

  const handlChange = e => {
    setDataproducto({
      ...setDataproducto,
      [e.target.name]: e.target.value
    });
    console.log(dataproducto);
  };
  return (
    <AuthProvaider>
      <AuthConsumer>
        {value => {
          return (
            <TranslatorProvider
              translations={require("../../assets/i18n/" +
                value.user.LANG +
                ".json")}
            >
              {console.log(value)}
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-5">
                    <div className="card mt-5">
                      <div className="card-body">
                        <FormularioTitulo content="Agregar Productos" />
                        <form>
                          <div className="form-group">
                            <FormularioLabel content="nombre" />
                            <input
                              type="text"
                              className="form-control"
                              name="nombre"
                              id="nombre"
                              onChange={handlChange}
                            />
                          </div>
                          <div className="form-group">
                            <FormularioLabel content="categoria" />
                            <input
                              type="text"
                              className="form-control"
                              name="Categoria"
                              id="Categoria"
                              onChange={handlChange}
                            />
                          </div>
                          <div className="form-group">
                            <FormularioLabel content="cantidad" />
                            <input
                              type="text"
                              className="form-control"
                              name="Cantidad"
                              id="Cantidad"
                              onChange={handlChange}
                            />
                          </div>
                          <div className="form-group">
                            <FormularioLabel content="valor" />
                            <input
                              type="text"
                              className="form-control"
                              name="ValorU"
                              id="ValorU"
                              onChange={handlChange}
                            />
                          </div>
                          <div className="form-group">
                            <FormularioButton content="Agregar" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TranslatorProvider>
          );
        }}
      </AuthConsumer>
    </AuthProvaider>
  );
}
export default Formulario;
