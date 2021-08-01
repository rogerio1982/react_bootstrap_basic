import React from "react";

import Menu from "./Components/Menu";
import Jumbo from "./Components/Jumbo";
import Carrosel from "./Components/Carrosel";
import Api from "./Components/Api";
function Home() {
  return (
    <div>
      <Menu />
      <Carrosel />
      <Api />
      <Jumbo />
    </div>
  );
}

export default Home;
