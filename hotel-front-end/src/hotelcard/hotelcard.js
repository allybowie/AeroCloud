import React from "react";
import "./hotelcard.css";

export const HotelCard = props => {
  const { details } = props;
  const { name, starRating, facilities } = details;
  return (
    <div className="HotelCard">
      <p>Name: {name}</p>
      <p>Rating: {starRating}</p>
      <p>Facilities: {facilities.join(", ")}</p>
    </div>
  );
};
