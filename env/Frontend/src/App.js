import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import * as actions from "./store/actions/index";

import History from "./History";
import Header from "./container/Header/Header";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import PostDetails from "./components/Posts/PostDetails";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div>
        <Router History={History}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details/:postSlug" component={PostDetails} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={SignUp} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.checkAuthState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
