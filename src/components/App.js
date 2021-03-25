import React from "react";
import { Route, Switch } from 'react-router-dom';
import HomePage from "./home/HomePage";
import BetSlip from "./modal/BetSlip";
import NavBar from "../components/common/NavBar";


function App() {
  return(
    <div className="container">
      <NavBar />
      <HomePage />
      <Switch>
        <Route path="Betslip" component={BetSlip} />
      </Switch>
    </div>
  );
}

export default App;
