import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";

import "./Posts.css";

import { postfetch } from "../../store/actions/index";

class Posts extends Component {
  componentDidMount() {
    this.props.postfetch();
  }
  render() {
    const { posts } = this.props;
    return (
      <Container>
        {posts.map(post => {
          return (
            <div
              className="posts"
              style={{ left: "15rem", top: "-41rem", marginBottom: "1rem" }}
            >
              <h2>Posts title</h2>
              <h4 className="category">Posts category</h4>
              <p className="post-time">posts time</p>
              <img src="" alt="author" />
              <p className="posts-overview">posts overview</p>
            </div>
          );
        })}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: Object.values(state.posts),
    isauth: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Posts);
