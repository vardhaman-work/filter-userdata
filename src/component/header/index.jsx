import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchForm from "./search-form";

function Header() {
  return (
    <header id="header">
      <Row>
        <Col xs={12} className="page-header-top">
          <Container>
            <Row>
              <Col className="flex-center">
                <h1>User Data</h1>
              </Col>
            </Row>
          </Container>
        </Col>
        
        <SearchForm />
      </Row>
    </header>
  );
}

export default Header;
