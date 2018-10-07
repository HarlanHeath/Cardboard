import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
      </div>
    );
  }
}
