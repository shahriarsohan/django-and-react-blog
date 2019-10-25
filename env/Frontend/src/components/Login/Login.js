import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Alert, Container, Form, Button, Spinner } from "react-bootstrap";

import { authLogin } from "../../store/actions/index";

import "./Login.css";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
  };

  render() {
    const { error, loading, token } = this.props;
    const { username, password } = this.state;
    if (token) {
      return <Redirect to="/" />;
    }
    return (
      <div className="root" style={{ marginTop: "20rem" }}>
        <div className="text1">
          <h1>Welcome Back</h1>
        </div>
        <div className="image">
          <img src="https://img.icons8.com/bubbles/100/000000/cloud-account-login-male.png" />
        </div>
        <Container>
          {error && (
            <Alert variant="danger" dismissible>
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>Make sure username and password are both valid</p>
            </Alert>
          )}
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                name="username"
                value={username}
                onChange={this.handleChange}
                size="lg"
                type="name"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                name="password"
                value={password}
                onChange={this.handleChange}
                size="lg"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="outline-success" type="submit" size="lg">
              Submit
            </Button>
            <Link
              to="/register"
              style={{ position: "absolute", top: "28.5rem", right: "26rem" }}
            >
              <p>Register if you are new here</p>
            </Link>
          </Form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    token: state.auth.token,
    loading: state.auth.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(authLogin(username, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
