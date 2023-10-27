import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Sam", lastName: "Nasstrom" },
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName}! Is your last name{" "}
            {this.state.name.lastName}?
          </p>
          <button
            onClick={() => {
              this.setState(() => {
                this.setState({
                  name: { firstName: "Gabriel", lastName: "Jackson" },
                });
              });
            }}
          >
            change name
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
