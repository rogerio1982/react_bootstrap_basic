import React from "react";

import Menu from "./Components/Menu";
import Jumbo from "./Components/Jumbo";
import Cartao from "./Components/Cartao";
import Carrosel from "./Components/Carrosel";

function Home() {
  return (
    <div>
      <Menu />
      <Carrosel />
      <Cartao />
      <Jumbo />
    </div>
  );
}

export default Home;
