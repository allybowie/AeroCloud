import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./sort.css";

export const Sort = () => {
  const [order, setOrder] = useState("asc");
  const hotelList = useSelector(state => state.hotels);

  const dispatch = useDispatch();

  const handleChange = event => {
    setOrder(event.target.value);
  };

  const handleSubmit = () => {
    dispatch({ type: "SORT", hotels: hotelList, sort: order });
  };

  return (
    <div className="Sort">
      <select onChange={handleChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <button onClick={handleSubmit}>Sort by rating</button>
    </div>
  );
};
