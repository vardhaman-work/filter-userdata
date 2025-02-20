import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";

import { searchUsers } from "../../features/users/userSlice";

function SearchForm() {

  const dispatch = useDispatch();

  function searchFn(e){
    const eleValue = e.target.value;
    axios.get(process.env.REACT_APP_SEARCH_USERS + eleValue)
    .then((response) => {
      const searchUsersList = response.data;
      dispatch(searchUsers(searchUsersList));
    })
  }

  return (
    <Col xs={12} className="search-area">
      <Container>
        <Row>
          <Col className="flex-center">
            <Form.Control
              type="text"
              placeholder="Search by name"
              onChange={searchFn}
            />
          </Col>
        </Row>
      </Container>
    </Col>
  );
}

export default SearchForm;
