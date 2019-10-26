import React, { Component } from "react";

import { Button, Card, Container, ListGroup } from "react-bootstrap";

import "./SideBar.css";
class SideBar extends Component {
  render() {
    return (
      <div style={{ marginTop: "5rem" }}>
        <Container>
          <div className="cat-sidebar">
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
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
export default SideBar;
