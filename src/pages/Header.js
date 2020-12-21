import React from "react";
import { Route, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import circle from "../assets/images/circle.png";
import "../App.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo_container">
        <div className="logo">
          <img src={logo} width="200" height="200" alt="logo" />
        </div>
        <div className="circle">
          <img
            className="rotate_img"
            src={circle}
            width="200"
            height="200"
            alt="circle"
          />
        </div>
        <section className="header_box">
          <div className="authContainer">
            <span className="subTitle">Let's make something awesome!</span>
            <br />
            <span className="author">SUPPORTED BY BTT</span>
          </div>
        </section>
      </div>
      <div>
        <Route path="/" />
        <Link className="link_tit" to="/">
          <h3>
            <br />
            WIZI Blog
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;
