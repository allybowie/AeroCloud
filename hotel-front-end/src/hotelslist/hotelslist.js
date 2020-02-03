import React from "react";
import { testData } from "../utils/testdata";

export const HotelsList = () => {
  const hotelList = testData;
  return (
    <ul>
      {hotelList.map(hotel => {
        return <p>{hotel.name}</p>;
      })}
    </ul>
  );
};
