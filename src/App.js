import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./component/header";
import Content from "./component/content";

import "./App.css";

function App() {
  return (
    <Container fluid>
      <main>
        <Header />
        <Content />
      </main>
    </Container>
  );
}

export default App;
