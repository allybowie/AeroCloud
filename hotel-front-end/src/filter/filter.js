import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./filter.css";

export const Filter = () => {
  const [filter, setFilter] = useState([]);
  const dispatch = useDispatch();
  const order = useSelector(state => state.order);

  const handleChange = event => {
    const index = filter.indexOf(event.target.value);
    let newFilters = filter;
    index > -1
      ? newFilters.splice(index, 1)
      : newFilters.push(event.target.value);
    setFilter(newFilters);
  };

  const handleSubmit = () => {
    dispatch({ type: "FILTER", filters: [...filter], order: order });
  };

  return (
    <div className="Filter">
      <form>
        <h2 className="FacilitiesHeader">Facilities</h2>
        <label>
          Car Park
          <input
            type="checkbox"
            value="car park"
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Gym
          <input type="checkbox" value="gym" onChange={handleChange}></input>
        </label>
        <label>
          Pool
          <input type="checkbox" value="pool" onChange={handleChange}></input>
        </label>
        <label>
          Pets
          <input type="checkbox" value="pets" onChange={handleChange}></input>
        </label>
      </form>
      <button onClick={handleSubmit}>Apply Filters:</button>
    </div>
  );
};
