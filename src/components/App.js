import React, { useState } from "react";
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import HomePage from "./home/HomePage";
import BetSlip from "./modal/BetSlip";
import NavBar from "../components/common/NavBar";

const Container = styled.div `
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
 `;
const Button = styled.div `
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #151515;
  color: #fff;
`;

function App() {
  const [showBetslip, setBetslip] = useState(false);

  const openBetSlip = () => {
    setBetslip(prior => !prior);
  };

  return(
    <>
    <div className="container">
    <Container>
        <Button onClick={openBetSlip}>I'm a button</Button>
        <BetSlip showBetslip={showBetslip} setBetslip={setBetslip} />
      </Container>
      <NavBar />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="Betslip" component={BetSlip} />
      </Switch>
    </div>
    </>
  );
}

export default App;
