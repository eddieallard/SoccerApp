import React, { useState } from "react";
import { Route,Switch } from 'react-router-dom';
import HomePage from "./home/HomePage";
import BetSlip from "./modal/BetSlip";
import NavBar from "../components/common/NavBar";
import axios from 'axios';


const filterIds = (list) => {
  const arr = [];

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const markets = item.markets;

    for (let j = 0; j < markets.length; j++) {
      const market = markets[j];
      const selections = market.selections;

      for (let h = 0; h < selections.length; h++) {
        const selection = selections[h];
        arr.push(selection);
      }
    }
  }
  return arr;
}


function App() {
  const [showBetslip, setBetslip] = useState(false);
  const [list, setlist] = useState([]);
  const [clickedList, setClickedList] = useState([]);

  React.useEffect(() => {
    axios.get("http://www.mocky.io/v2/59f08692310000b4130e9f71").then(res => setlist(res.data))
  }, []);

  const handleAdd = (id) => {
    const arr = filterIds(list);
    let clicked;
    arr.forEach(el => {
      if (el.id === id) {
        clicked = el;
      }
    });
    const newClickedList = [...clickedList, clicked];
    setClickedList(newClickedList);
  };

  const openBetSlip = () => {
    // this is a toggle value for the button
    setBetslip(prior => !prior);
  };

  const handleRemove = (id) => {
    let newArr = [];
    clickedList.forEach(el => {
      if (el.id !== id) {
        newArr.push(el)
      }
    })
    setClickedList(newArr);
  };

  return (
    <>
    <div className="container">
      <NavBar setBetslip={openBetSlip}/>
          <BetSlip handleRemove={handleRemove} list={clickedList} open={showBetslip} />
      <Switch>
        <Route path="/">
          <HomePage handleAdd={handleAdd} list={list} />
        </Route>
      </Switch>
    </div>
    </>
  );
}

export default App;