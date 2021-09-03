import React from "react";
import "./card.css";
 
export const Card = ({ title, data }) => {
  return (
    <div className="d-flex flex-column align-items-center reelsCard">
      <p>{title}</p>
      <div className="reelsCount">{data}</div>
    </div>
  );
};
