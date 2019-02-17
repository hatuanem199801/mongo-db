import React, { Component } from "react";
class Info extends Component {
  state = {};
  render() {
    return (
      <div>
        <a
          target="_blank"
          href="https://github.com/r-spacex/SpaceX-API"
          className="badge badge-light text-dark px-3 py-1 mr-2"
        >
          GitHub
        </a>
        <a
          target="_blank"
          href="https://graphql.org"
          className="badge badge-light text-dark px-3 py-1 mr-2"
        >
          GraphQL
        </a>
        <a
          target="_blank"
          href="https://getbootstrap.com/docs/4.0/getting-started/introduction/"
          className="badge badge-light text-dark px-3 py-1 mr-2"
        >
          Bootstrap 4
        </a>
        <a
          target="_blank"
          href="https://reactjs.org/"
          className="badge badge-light text-dark px-3 py-1 mr-2"
        >
          React
        </a>
      </div>
    );
  }
}

export default Info;
