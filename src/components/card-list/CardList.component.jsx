import React from "react";
import "./CardList.styles.css";

import Card from "../card/Card.component";

const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map((monster, i) => (
        <Card key={i} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
