import React from "react";
import { testData } from "../utils/testdata";
import "./hotelslist.css";
const { HotelCard } = require("../hotelcard/hotelcard");

export const HotelsList = () => {
  const hotelList = testData;
  return (
    <ul>
      {hotelList.map((hotel, index) => {
        return <HotelCard key={index} details={hotel} />;
      })}
    </ul>
  );
};
