import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Eletronics.com</h1>
          <p className="lead">
            Tudo para game em um só lugar. Aproveite e paça já o seu xbox.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
