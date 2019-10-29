import React, { Component } from "react";
import axios from "axios";

import { Alert, Spinner } from "react-bootstrap";

import { postDetailsURL } from "../../endpoints";
import SideBar from "../Home/SideBar";
import "./Postdetails.css";

class PostDetails extends Component {
  state = {
    loading: false,
    error: null,
    post: []
  };

  componentDidMount() {
    this.handleFetchPost();
  }

  handleFetchPost = () => {
    const {
      match: { params }
    } = this.props;

    this.setState({ loading: true });
    axios
      .get(postDetailsURL(params.postSlug))
      .then(res => {
        this.setState({ post: res.data, loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };

  render() {
    const { post, loading, error } = this.state;
    console.log(post);

    return (
      <div className="main-block007">
        <SideBar />
        {error && (
          <Alert variant="danger" dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>{JSON.stringify(error)}</p>
          </Alert>
        )}
        {loading && <Spinner animation="grow" className="spinner" />}
        <div className="posts1">
          <div className="post-image">
            <img src={post.image} alt="thumnail" />
          </div>
          <div className="sub-container">
            <div className="post-heading">
              <h2>{post.title}</h2>
            </div>
            <div className="post-author">
              <p>Posted by : {post.author}</p>
            </div>
            <hr />
            <div className="post-description">{post.description}</div>
            <div className="disqus-main"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostDetails;
