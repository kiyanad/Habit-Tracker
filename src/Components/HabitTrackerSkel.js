import React, { Component } from 'react';
import '../CSS/HabitTracker.css';
import 'wired-elements';


class HabitTracker extends Component {

componentDidMount() {
  const COLORS = {
    0: { code: "Green", label: "Completed 👍" },
    1: { code: "Red", label: "Not Completed 👎" },
    2: { code: "Black", label: "Missed Day 😞" },
    3: { code: "White", label: "Remove 🚫" },

  };

  const YEAR_CONTAINER = document.getElementById("yearContainer");
  const DAYS_HEADER = document.getElementById("daysHeader");
  const MONTH_HEADER = document.getElementById("monthHeader");
  const GUIDES = document.getElementById("guide");
  const SELECTED_MOOD = document.querySelector("#selectedMood span");
  const MOODS = document.getElementById("moods");
  const MONTH_LETTERS = [
    "Read",
    "Stretch",
    "Meditate",
    "Fill Logs",
    "Cook",
    "No soda",
    "Water",
    "Dishes",
    "Laundry",
    "Room",
    "Bed",
    "Sleep-in"
  ];

    let selectedMood = null;

    let init = () => {
      checkLocalStorage();
      generateVisualStructure();
      setMoods();
    };

// SETS COLOR IF COMPLETED OR MISSED //
    let setMoods = () => {

      let colorKeys = Object.keys(COLORS);
      colorKeys.forEach(e => {
        let mood = document.createElement("div");
        let color = document.createElement("span");

        color.style.background = getGradient(COLORS[e].code);
        // debugger

        mood.setAttribute("mood", e);
        color.setAttribute("mood", e);

        mood.textContent += COLORS[e].label;
        mood.appendChild(color);
        // debugger

        MOODS.appendChild(mood);
      });
    };

    let checkLocalStorage = () => {
      if (window.localStorage.structure === undefined) {
        let structure = generateDataStructure();
        localStorage.setItem("structure", JSON.stringify(structure));
      }
    };

    let generateDataStructure = () => {
      let data = {};

      for (let i = 0; i < 12; i++) {
        data[i] = Array.from({ length: getDaysFromMonth(i + 1) }, () => null);
      }


      return data;
    };

    let generateVisualStructure = () => {
      const data = getCurrentLSStructure();
      const months = Object.keys(data);
      const dayHeaderLength = 7;

      let monthHeaderSet = false;

      // for (let day = 1; day <= dayHeaderLength; day++) {
        let days = [" M"," T"," W ","Th ","F ","Sa ","S "]
        days.forEach(function(day){
          let dayHeader = document.createElement("div");
          dayHeader.className = "dayHeader";
        dayHeader.textContent += day;
        console.log(day);

        DAYS_HEADER.appendChild(dayHeader);
      })

      months.forEach(month => {
        let monthContainer = document.createElement("div");
        monthContainer.className = "monthContainer";
        let monthHeader = document.createElement("div");
        monthHeader.className = "monthHeader";
        monthHeader.textContent = MONTH_LETTERS[month];

        let days = ["0", "1", "2", "3", "4", "5", "6"]
        // console.log(days);

        days.forEach(day => {
          let dayContainer = document.createElement("div");
          dayContainer.className = "dayContainer";
          dayContainer.onclick = () => {
            assignMood(month, day, dayContainer);
          };

          if (data[month][day])
            dayContainer.style.background = getGradient(
              COLORS[data[month][day]].code
            );

          monthContainer.appendChild(dayContainer);
        });

        MONTH_HEADER.appendChild(monthHeader);
        YEAR_CONTAINER.appendChild(monthContainer);
      });
    };

    let assignMood = (month, day, item) => {
      let data = getCurrentLSStructure();

      data[month][day] = selectedMood;
      debugger

      if (selectedMood) {
        item.style.background = getGradient(COLORS[selectedMood].code);
        console.log(item.style.background); }


      localStorage.setItem("structure", JSON.stringify(data));
    };

   let getDaysFromMonth = month => new Date(2019, month, 0).getDate();
    let getCurrentLSStructure = () => JSON.parse(window.localStorage.structure);
    let getGradient = colorId =>
      `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, ${colorId} 100%)`;

      GUIDES.addEventListener("click", e => {
        if (e.target.attributes[0].value) {
          // debugger
          selectedMood = e.target.attributes[0].value;
          SELECTED_MOOD.style.background = getGradient(COLORS[selectedMood].code);
        }
      });

    init();


}



render () {

    return (
      <div className="HabitBackground" >
      <h1 class="title">[Habit"  |  -Tracker!#~</h1>

<div id="guide">
  <div id="moods"></div>
  <div id="selectedMood">Selected: <span></span></div>
</div>
<div className="HabitCard">
<div class="tape"></div>
<div class="tape1"></div>
<div class="tape2"></div>
<div class="tape3"></div>

<div class="content">
  <div id="daysHeader"></div>
  <div id="tableContainer">
    <div id="monthHeader"></div>
    <div id="yearContainer"></div>
  </div>
</div>
</div>
      </div>
    );
  }
}

export default HabitTracker
