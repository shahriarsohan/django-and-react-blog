import React from "react";
import { Form } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";

//this component is incomplete , i will complete it later

class Contact extends React.Component {
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            name="username"
            // value={username}
            onChange={this.handleChange}
            size="lg"
            type="name"
            placeholder="Enter email"
          />
        </Form.Group>
      </Form>
    );
  }
}

export default Contact;
