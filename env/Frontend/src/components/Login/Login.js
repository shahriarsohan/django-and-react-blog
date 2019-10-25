import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="root" style={{ marginTop: "20rem" }}>
        <div className="text">
          <h1>Welcome Back</h1>
        </div>
        <div className="image">
          <img src="https://img.icons8.com/bubbles/100/000000/cloud-account-login-male.png" />
        </div>
        <Container>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control size="lg" type="name" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control size="lg" type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="outline-success" type="submit" size="lg">
              Submit
            </Button>
            <div className="paragraph">
              <Link to="#">
                <p>Forget Password?</p>
              </Link>
            </div>
          </Form>
        </Container>
      </div>
    );
  }
}
