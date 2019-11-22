import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from './pages/Login';
import SetProducto from './pages/SetProducto'
import Venta from './pages/Venta'
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/Home" component={Venta} />
      <Route exact path="/SetProducto" component={SetProducto} />
    </Switch>
  </BrowserRouter>
)
}

export default App;
