import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";
import { useDispatch } from "react-redux";

import UsersTableData from "./UsersTableData";
import { fetchUsers } from "../../features/users/userSlice";

function Header() {

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(process.env.REACT_APP_GET_ALL_USERS)
    .then((response) => {
      const users = response.data;
      dispatch(fetchUsers(users));
    })
  },[dispatch])

  return (
    <section>
      <Row>
        <Col>
          <Container>
            <Tabs
              defaultActiveKey="admin"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="admin" title="Admin">
                <UsersTableData role="admin" />
              </Tab>
              <Tab eventKey="user" title="User">
                <UsersTableData role="user" />
              </Tab>
              <Tab eventKey="moderator" title="Moderator">
                <UsersTableData role="moderator" />
              </Tab>
            </Tabs>
          </Container>
        </Col>
      </Row>
    </section>
  );
}

export default Header;
