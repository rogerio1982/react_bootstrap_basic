import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Sobre from "./Sobre";
import Contato from "./Contato";

function App() {
  return (
    <BrowserRouter>
      <div></div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/contato" component={Contato} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
