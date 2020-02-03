import React, { useState } from "react";

export const Filter = () => {
  const [filter, setFilter] = useState([]);

  return (
    <div>
      <form>
        <label>
          Car Park
          <input type="checkbox" value="car park"></input>
        </label>
        <label>
          Gym
          <input type="checkbox" value="gym"></input>
        </label>
        <label>
          Pool
          <input type="checkbox" value="pool"></input>
        </label>
        <label>
          Pets
          <input type="checkbox" value="pets"></input>
        </label>
      </form>
      <button>Apply Filters:</button>
    </div>
  );
};
