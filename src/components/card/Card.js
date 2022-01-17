import React from "react";
import "./card.css";

export const Card = (props) => {
  const { id,name, logo, image } = props.params;
  return (
    <div className="card">
      <a href={`${id}`}>
        <div className="img-border" style={{backgroundImage:`url(${image})`}}>
          {image!==undefined || <img className="card-img" src={logo} alt={name} />}
        </div>
        <div className="card-txt">
          <h4>{name}</h4>
        </div>
      </a>
    </div>
  );
};
