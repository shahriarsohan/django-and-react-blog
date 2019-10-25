import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Form, FormControl } from "react-bootstrap";

import { authLogout } from "../../store/actions/index";

import "./Header.css";

const Header = props => {
  const { isAuthenticated, logout } = props;
  return (
    <>
      <header className="main-header">
        <button className="toggle-button">
          <span className="toggle-button__bar"></span>
          <span className="toggle-buuton__bar"></span>
          <span className="toggle-buuton__bar"></span>
        </button>
        <a href="/" className="main-header__brand">
          <img
            src="https://img.icons8.com/doodle/48/000000/blogger--v3.png"
            alt="Your Favourite reading place"
          />
        </a>
        <li className="main-nav__item">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-3" />
            {/* <Button style={{ position: "inline" }} type="submit"> */}
            {/* Submit
          </Button> */}
          </Form>
        </li>
        <nav className="main-nav">
          <ul className="main-nav__items">
            <li className="main-nav__item">
              <Link to="/" className="item">
                Home
              </Link>
            </li>
            <li className="main-nav__item">
              <Link to="/" className="item">
                Posts
              </Link>
            </li>
            <li className="main-nav__item">
              <Link to="/" className="item">
                About
              </Link>
            </li>
            <li className="main-nav__item">
              <Link to="/" className="item">
                Contatct
              </Link>
            </li>
            {isAuthenticated ? (
              <li className="main-nav__item main-nav__item--cta">
                <Button onClick={() => logout()} variant="danger">
                  Logout
                </Button>
              </li>
            ) : (
              <React.Fragment>
                <li className="main-nav__item main-nav__item--cta">
                  <Link to="/login" className="item">
                    Login
                  </Link>
                </li>
                <li className="main-nav__item main-nav__item--cta">
                  <Link to="/register" className="item">
                    Register
                  </Link>
                </li>
              </React.Fragment>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const maoDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(authLogout())
  };
};

export default connect(
  mapStateToProps,
  maoDispatchToProps
)(Header);
