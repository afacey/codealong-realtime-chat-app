import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Chat from "chat/Chat";

import { Container } from "shards-react";

const App = () => (
  <Container>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quasi
      distinctio. Sapiente, sed tenetur. Natus nobis iusto soluta maxime
      pariatur, obcaecati praesentium saepe eveniet repellat. Iure, doloremque
      pariatur, voluptatum perferendis, vel tenetur laborum sunt consequuntur
      rem fugiat placeat suscipit ipsa.
    </p>

    <h1>Chat!</h1>
    <Chat />
  </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
