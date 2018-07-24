import React, { Component, Fragment } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-weapper">
          <a className="left brand-logo">Email</a>
          <ul className="right">
            <li>
              <a>Login With Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
