import React, { Component } from "react";

class NavBar extends Component {
  render() {
    console.log("NavBar-Render");

    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          Navbar{" "}
          <span className="badge badge-secondary">
            {this.props.totalCounter}
          </span>
        </span>
      </nav>
    );
  }
}

export default NavBar;
