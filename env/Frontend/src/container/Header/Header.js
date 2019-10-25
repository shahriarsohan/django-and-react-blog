import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormControl } from "react-bootstrap";
import "./Header.css";

const Header = () => {
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
            <li className="main-nav__item main-nav__item--cta">
              <Link to="/" className="item">
                Login
              </Link>
            </li>
            <li className="main-nav__item main-nav__item--cta">
              <Link to="/" className="item">
                Logout
              </Link>
            </li>
            <li className="main-nav__item main-nav__item--cta">
              <Link to="/" className="item">
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
