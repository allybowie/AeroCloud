import React from "react";
import "./hotelcard.css";

export const HotelCard = props => {
  const { details } = props;
  const { name, starRating, facilities } = details;
  return (
    <div className="HotelCard">
      <p>{name}</p>
      <p>{starRating}</p>
      <p>{facilities.join(" ")}</p>
    </div>
  );
};
