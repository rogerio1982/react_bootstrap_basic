import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody
} from "reactstrap";
class Cartao extends React.Component {
  state = {
    filmes: []
  };

  componentDidMount() {
    fetch("https://apimovies.pythonanywhere.com/movies")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          filmes: res
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Lista de filmes</h1>
        <ul>
          {this.state.filmes.map((item) => (
            <CardGroup>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://http2.mlstatic.com/D_NQ_NP_2X_627914-MLA40655732617_022020-V.webp"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h6">
                    <b>id: </b> {item.id}
                  </CardTitle>
                  <CardTitle tag="h3">
                    <b>Filme: </b> {item.title}
                  </CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    <b>Genero: </b>
                    {item.genre}
                  </CardSubtitle>
                  <CardText>
                    <b>Ano: </b>
                    {item.year}
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </CardGroup>
          ))}
        </ul>
      </div>
    );
  }
}
export default Cartao;
