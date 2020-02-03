import React from "react";
import "./App.css";
const { HotelsList } = require("./hotelslist/hotelslist");
const { Sort } = require("./sort/sort");
const { Filter } = require("./filter/filter");

function App() {
  return (
    <div className="App">
      <header className="App-header">Hotels</header>
      <Filter />
      <Sort />
      <HotelsList />
    </div>
  );
}

export default App;
