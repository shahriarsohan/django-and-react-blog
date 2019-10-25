import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import History from "./History";
import Header from "./container/Header/Header";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div>
      <Router History={History}>
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
