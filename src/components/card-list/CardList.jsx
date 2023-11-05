import React, { Component } from "react";
import "./CardList.css";
import { Card } from "@mui/material";

class CardList extends Component {
  render() {
    console.log("render from card list");
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            <Card monster={monster}/>
          );
        })}
      </div>
    );
  }
}

export default CardList;
