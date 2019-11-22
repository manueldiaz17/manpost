import React, { useState } from "react";
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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="text-center">Agregar Productos</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="NombreProducto">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    id="nombre"
                    onChange={handlChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="NombreCategoria">Categoria</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Categoria"
                    id="Categoria"
                    onChange={handlChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Cantidad">Cantidad</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Cantidad"
                    id="Cantidad"
                    onChange={handlChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ValorUnitario">ValorUnitario</label>
                  <input
                    type="text"
                    className="form-control"
                    name="ValorU"
                    id="ValorU"
                    onChange={handlChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="form-control"
                    name="Agregar"
                    id="Agregar"
                    value="Agregar Producto"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Formulario;
