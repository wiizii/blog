import React from "react";
import { Route, Link } from "react-router-dom";
import Dummy from "./Dummy";

const Body = () => {
  return (
    <div className="body">
      <div className="banner_container">
        <Route path="/" />
        <Link className="link_tit" to="/">
          <span className="banner">Portfolio</span>
        </Link>
      </div>
      <div className="category">
        <span className="tag">ALL</span>
        <span className="tag">MODEL</span>
        <span className="tag">DESIGN</span>
        <span className="tag">CANVAS</span>
        <span className="tag">ABOUT</span>
      </div>
      <Dummy />
    </div>
  );
};

export default Body;
