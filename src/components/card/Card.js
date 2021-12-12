import React from "react";
import "./card.css";

export const Card = (props) => {
  const { name, logo, image } = props.params;
  return (
    <div className="card">
      <a href="#">
        <div className="img-border">
          <img className="card-img" src={logo} alt={name} />
        </div>
        <div className="card-txt">
          <h4>{name}</h4>
        </div>
      </a>
    </div>
  );
};
