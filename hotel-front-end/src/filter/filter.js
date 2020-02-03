import React, { useState } from "react";

export const Filter = () => {
  const [filter, setFilter] = useState([]);

  const handleChange = event => {
    const index = filter.indexOf(event.target.value);
    let newFilters = filter;
    index > -1
      ? newFilters.splice(index, 1)
      : newFilters.push(event.target.value);
    setFilter(newFilters);
  };

  return (
    <div>
      <form>
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
      <button>Apply Filters:</button>
    </div>
  );
};
