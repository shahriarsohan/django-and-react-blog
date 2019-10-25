import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

import "./SignUp.css";

export default class SignUp extends Component {
  render() {
    return (
      <div className="root" style={{ marginTop: "20rem" }}>
        <div className="text">
          <h1>Hello Geek :)</h1>
        </div>
        <div className="info">
          <h1>Under Construction...</h1>
        </div>
        <div className="image">
          <img src="https://img.icons8.com/bubbles/100/000000/cloud-account-login-male.png" />
        </div>
        <Container>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control size="lg" type="name" placeholder="username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control size="lg" type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control size="lg" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                size="lg"
                type="password"
                placeholder="Re-type Password"
              />
            </Form.Group>
            <Button variant="outline-success" type="submit" size="lg">
              Submit
            </Button>
            <div className="paragraph">
              <Link to="/login">
                <p>Alreadry have an account?</p>
              </Link>
            </div>
          </Form>
        </Container>
      </div>
    );
  }
}
