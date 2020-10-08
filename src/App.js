import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import casino from './image/casino.svg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas)

const App = () => {

  const randNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const doSlot = () => {
    document.querySelector("#status").innerHTML = ""
    let initial_num = randNumber(1,2)*7;
    let rand_num1 = initial_num+randNumber(1,3)
    let rand_num2 = initial_num+2*7+randNumber(1,4)
    let rand_num3 = initial_num+4*7+randNumber(1,3)

    let counter_1 = 0;
    let counter_2 = 0;
    let counter_3 = 0;

    let slot1Interval = setInterval(slot1, 50)
    let slot2Interval = setInterval(slot2, 50)
    let slot3Interval = setInterval(slot3, 50)

    function slot1() {
      counter_1++;
      if (counter_1 >= rand_num1) {
        clearInterval(slot1Interval)
        return false;
      }
      let slotTile = document.getElementById("slot1");
      if (slotTile.className === "a7"){
        slotTile.className = "a0";
      }
      slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
    }

    function slot2() {
      counter_2++;
      if (counter_2 >= rand_num2) {
        clearInterval(slot2Interval)
        return false;
      }
      let slotTile = document.getElementById("slot2");
      if (slotTile.className === "a7"){
        slotTile.className = "a0";
      }
      slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
    }

    function slot3() {
      counter_3++;
      if (counter_3 >= rand_num3) {
        clearInterval(slot3Interval)
        checkWin()
        return false;
      }
      let slotTile = document.getElementById("slot3");
      if (slotTile.className === "a7"){
        slotTile.className = "a0";
      }
      slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
    }

    function checkWin() {
      let slot1 = document.getElementById('slot1').className
      let slot2 = document.getElementById('slot2').className
      let slot3 = document.getElementById('slot3').className

      if (((slot1 === slot2 && slot2 === slot3) ||
      (slot1 === slot2 && slot3 === "a7") ||
      (slot1 === slot3 && slot2 === "a7") ||
      (slot2 === slot3 && slot1 === "a7") ||
      (slot1 === slot2 && slot1 === "a7") ||
      (slot1 === slot3 && slot1 === "a7") ||
      (slot2 === slot3 && slot2 === "a7") ) && !(slot1 === slot2 && slot2 === slot3 && slot1 === "a7")){
        document.querySelector("#status").innerHTML = "Win !!!"
        console.log("Win")
      } else {
        document.querySelector("#status").innerHTML = "Lose !"
        console.log("Lose")
      }
    }

  }

  return (
    <div>
      <div className="SlotMachine">
        <img className="slotmachine-logo" src={casino} alt=""/>
        <div className="slot-grid">
          <div id="slot1" className="slot" className="a1"></div>
          <div id="slot2" className="slot" className="a1"></div>
          <div id="slot3" className="slot" className="a1"></div>
        </div>
        <div className="slot-action">
          <div className="status"><h3 id="status"></h3></div>
          <div className="action-button"><div className="slot-start" onClick={() => doSlot()}><FontAwesomeIcon icon={['fas', 'play']} /></div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
