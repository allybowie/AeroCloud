import React from "react";
import "./App.css";
const { HotelsList } = require("./hotelslist/hotelslist");
const { Sort } = require("./sort/sort");

function App() {
  return (
    <div className="App">
      <header className="App-header">Hotels</header>
      <Sort />
      <HotelsList />
    </div>
  );
}

export default App;
