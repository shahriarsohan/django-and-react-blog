import React, { Component } from "react";
import SideBar from "./SideBar";
import Posts from "./Posts";
import { postfetch } from "../../store/actions/index";

class Home extends Component {
  componentDidMount() {
    this.props.postfetch();
  }
  render() {
    return (
      <>
        <SideBar />
        <Posts />
      </>
    );
  }
}
export default Home;
