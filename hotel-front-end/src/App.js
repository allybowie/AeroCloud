import React from "react";
import "./App.css";
const { HotelsList } = require("./hotelslist/hotelslist");

function App() {
  return (
    <div className="App">
      <header className="App-header">Hotels</header>
      <HotelsList />
    </div>
  );
}

export default App;
