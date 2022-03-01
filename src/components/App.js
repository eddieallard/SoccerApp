import React, { useState } from "react";
import { Route,Switch } from 'react-router-dom';
import HomePage from "./home/HomePage";
import BetSlip from "./modal/BetSlip";
import NavBar from "../components/common/NavBar";
import axios from 'axios';

function App() {
  const [showBetslip, setBetslip] = useState(false);
  const [list, setlist] = useState([]);
  const [clickedList, setClickedList] = useState([]);

  React.useEffect(() => {
    axios.get("http://www.mocky.io/v2/59f08692310000b4130e9f71").then(res => setlist(res.data.reverse()))
  }, []);

  const handleAdd = (newItem) => {
    const clickedListIds = clickedList.map(e => e.id)
    if(clickedListIds.includes(newItem.id)) return; // avoiding duplicate entries on multiple clicks
    setClickedList(oldList => ([...oldList, newItem]));
  };

  const openBetSlip = () => {
    // this is a toggle value for the button
    setBetslip(prior => !prior);
  };

  const handleRemove = (id) => {
    setClickedList(oldItems => oldItems.filter(item => item.id !== id));
  };

  return (
    <>
    <div className="container">
      <NavBar setBetslip={openBetSlip}/>
          <BetSlip handleRemove={handleRemove} list={clickedList} open={showBetslip} />
      <Switch>
        <Route path="/">
          <HomePage handleAdd={handleAdd} list={list} clickedList={clickedList} />
        </Route>
      </Switch>
    </div>
    </>
  );
  };
export default App;