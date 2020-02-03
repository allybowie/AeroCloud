import React, { useState } from "react";

export const Sort = () => {
  const [order, setOrder] = useState("asc");

  const handleChange = event => {
    setOrder(event.target.value);
  };

  return (
    <div className="Sort">
      <select onChange={handleChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <button>Sort</button>
    </div>
  );
};
