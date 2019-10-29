import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Card, Container, ListGroup } from "react-bootstrap";

import "./SideBar.css";
import { categoryList } from "../../endpoints";
class SideBar extends Component {
  state = {
    error: null,
    laoding: false,
    category: []
  };

  componentDidMount() {
    this.setState({ laoding: true });
    axios
      .get(categoryList)
      .then(res => this.setState({ category: res.data }))
      .catch(err => {
        this.setState({ error: err });
      });
  }

  render() {
    const { category, error, laoding } = this.state;
    return (
      <div style={{ marginTop: "5rem" }}>
        <Container>
          <div className="cat-sidebar">
            {category.map(cat => {
              return (
                <ListGroup>
                  <ListGroup.Item>{cat.name}</ListGroup.Item>
                </ListGroup>
              );
            })}

            <Card style={{ width: "14rem", marginTop: "2rem" }}>
              <Card.Img
                variant="top"
                src="http://images.clipartpanda.com/apple-20clip-20art-nicubunu_Apple_Clipart_Free.png"
              />
              <Card.Body>
                <div className="profile-heading">
                  <h2>Author</h2>
                </div>
                <div className="profile-icon">
                  <a href="https://github.com/shahriarsohan">
                    <i className="fab fa-github-square"></i>
                  </a>
                  <a href="https://github.com/shahriarsohan">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://github.com/shahriarsohan">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}
export default connect(null)(SideBar);
