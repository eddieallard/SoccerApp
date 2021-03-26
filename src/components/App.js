import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import HomePage from "./home/HomePage";
import BetSlip from "./modal/BetSlip";
import NavBar from "../components/common/NavBar";
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  const [showBetslip, setBetslip] = useState(false);

  const openBetSlip = () => {
    // this is a toggle value for the button
    setBetslip(prior => !prior);
  };

  return(
    <>
    <div className="container">
      <NavBar>
        <MenuIcon onClick={openBetSlip} />
      </NavBar>
        <BetSlip showBetslip={showBetslip} setBetslip={setBetslip} />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="Betslip" component={BetSlip} />
      </Switch>
    </div>
    </>
  );
}

export default App;
