import React from "react";
import "./hotelslist.css";
import { useSelector } from "react-redux";
const { HotelCard } = require("../hotelcard/hotelcard");

export const HotelsList = () => {
  const hotelList = useSelector(state => state.hotels);
  return (
    <div className="HotelList">
      {hotelList.map((hotel, index) => {
        return <HotelCard key={index} details={hotel} />;
      })}
    </div>
  );
};
