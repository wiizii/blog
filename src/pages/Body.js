import React from "react";
import { Route, Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="body">
      <div className="banner_container">
        <br />
        <br />
        <Route path="/" />
        <Link className="link_tit" to="/">
          <span className="banner">Portfolio</span>
        </Link>
      </div>
      <div>content</div>
    </div>
  );
};

export default Body;
