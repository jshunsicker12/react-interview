import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import PlantsTable from "./PlantsTable";
import BirdsTable from "./BirdsTable";

function App() {

  const [showPlants, setShowPlants] = useState(true)
  const toggleHandler = () => {
    setShowPlants(!showPlants)
    console.log(showPlants);
  }


// x = plants, y = birds, z state which holds and toggles based on the showPlants state.
  return (
    <div className="App">
      <button onClick={toggleHandler}>Toggle View</button>
      {showPlants ? <PlantsTable/> : <BirdsTable/>}
    </div>
  );
}

export default App;
