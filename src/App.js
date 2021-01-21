import "./app.scss";
import React, { useState } from "react";
import TrelloList from "./components/TrelloList";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

export default function App() {
  return (
    <main className="Trello">
      <section className="Trello__Container">
        <Container>
          <Row className="Header">
            <Col xl={6} xl={{ span: 6, offset: 1 }}>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
            <Col>
              <Button className="Header__Button">fale com a let's</Button>
            </Col>
            <Col>
              <Row className="Header__Inbox">
                <img src={require("./assets/images/inbox.svg")} />
                <p>inbox</p>
              </Row>
            </Col>
            <Col>
              <Row className="Header__User">
                <img src={require("./assets/images/user.svg")} />
                <p>
                  Olá <span> Sandra</span>
                </p>
                <img src={require("./assets/images/Down.svg")} />
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="justify-content-center">
            <TrelloList />
          </Row>
        </Container>
      </section>
    </main>
  );
}
