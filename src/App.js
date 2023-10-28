import "./App.css";

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "12ersda1w",
        },
        {
          name: "Frank",
          id: "12ersda1s",
        },
        {
          name: "Jacky",
          id: "12ersda1x",
        },
        {
          name: "Gabby",
          id: "12ersda1t",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1 >{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
