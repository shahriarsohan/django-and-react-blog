import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Avatar from "react-avatar";

import { Alert, Container, Spinner, Row, Col, Image } from "react-bootstrap";

import "./Posts.css";
import { postsListURL, postDetailsURL } from "../../endpoints";

class Posts extends Component {
  state = {
    posts: [],
    error: null,
    loading: false
  };

  componentDidMount() {
    this.setState({
      loading: true
    });
    axios
      .get(postsListURL)
      .then(res => {
        this.setState({
          posts: res.data,
          loading: false
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: err
        });
      });
  }
  render() {
    const { posts, loading, error } = this.state;
    return (
      <>
        {error && (
          <Alert variant="danger" dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>{JSON.stringify(error)}</p>
          </Alert>
        )}
        {loading && <Spinner animation="grow" className="spinner" />}

        {posts.map(post => {
          return (
            <Container key={post.slug}>
              <div
                className="posts"
                style={{ left: "15rem", top: "-41rem", marginBottom: "1rem" }}
              >
                {/* <div className="thumbnail">
                  <img src={post.image} alt={post.title} />
                </div> */}
                <Link to={`/details/${post.slug}`}>
                  <h2>{post.title}</h2>
                </Link>

                <h4 className="category">{post.category.name}</h4>
                <p className="post-time">posts time</p>
                {/* <img src="" alt={post.author} /> */}
                <div
                  style={{ textTransform: "capitalize" }}
                  className="author-avator"
                >
                  <Avatar name={post.author} size="40" round={true} />{" "}
                  {post.author}
                </div>
                <p className="posts-overview">{post.overview}</p>
              </div>
            </Container>
          );
        })}
      </>
    );
  }
}

export default Posts;
