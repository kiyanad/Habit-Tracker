import React, { Component } from 'react';
import '../HabitCss/HT.css';
import '../../CSS/Calender.css';
import TopHabit from "./TopHabit"
import DayHeader from "../HabitFuncComponents/DayHeader"
import Grid from "../HabitFuncComponents/Grid"
import Form from "./Form"
import Activity from "./Activity"
import dateFns from "date-fns";
import { Redirect } from 'react-router';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';



// RENDERS DAY HEADER && GRID FUNC COMPONENT //


class HabitTracker extends Component {

    state = {
      //LIST OF AL USER HABITS //
      userhabits: [],
      //LIST OF ALL HABITS //
      habits: [],
      userinstances: [],
      selected: null,
      currentMonth: new Date(),
      selectedDate: new Date(),
      activities: []

    }
    // COMPONENTDIDMOUNT //

    componentDidMount(){
      // FETCH TO GET LIST OF USER HABITS //
      fetch("http://localhost:3000/api/v1/user_habits", {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${window.sessionStorage.accessToken}`
        }
      })
        .then(res=>res.json())
        .then(habits => this.setState({
          userhabits: habits.user_habit
          })
        )
      // END OF FETCH //


      //  FETCH TO GET LIST OF ACTIVITIES
      fetch("http://localhost:3000/api/v1/activities", {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${window.sessionStorage.accessToken}`
        }
      })
        .then(res=>res.json())
        .then(activities => this.setState({
          activities: activities.habit
        })
        )

  // FETCH TO GET LIST OF ALL HABITS

      // fetch(`${process.env.REACT_APP_API_LOCATION}/api/v1/habits`, {
      //   method: 'GET',
      //   headers: {
      //     Authorization: `Bearer ${window.sessionStorage.accessToken}`
      //         }
      // })
      //   .then(res=>res.json())
      //   .then(habits => this.setState({
      //     habits: habits.habit
      //   })
      // )
      // END OF CLICKHANDLER //


      //FETCH TO GET ALL HABITS //

      fetch(`http://localhost:3000/api/v1/habits`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${window.sessionStorage.accessToken}`
              }
      })
        .then(res=>res.json())
        .then(habits => this.setState({
          habits: habits.habit
        })
      )
      // END FETCH

      // FETCH TO GET ALL USER INSTANCES
      fetch("http://localhost:3000/api/v1/user_instances",{
        method: 'GET',
        headers: {
        Authorization: `Bearer ${window.sessionStorage.accessToken}`
        }
      })
        .then(res=>res.json())
        .then(instance => this.setState({
          userinstances: instance.user_instance
        })
        )

      // END FETCH
  }
// END OF COMPONENTDIDMOUNT //



// CLICK HANDLER TO ADD A HABIT TO USER HABITS VIA HABITS //
// DIFFERENCE IS THIS IT TO ADD HABIT USER INPUTS
// E.TARGET.NAME.VALUE

addHabit = (e) => {
  e.preventDefault()
  fetch("http://localhost:3000/api/v1/habits", {
    method: 'POST',
    headers:{
      Authorization: `Bearer ${window.sessionStorage.accessToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
    body: JSON.stringify({
      habit: {name: `${e.target.name.value}`
        }
      }),
    })
      .then(res => {
        // debugger
        if (res.ok){
          return res.json()
        }

        else {
          let error= new Error ("Cannot add habit twice")
          throw error
        }
      })
      .then(response => this.setState({
        userhabits: [...this.state.userhabits, response.user_habit],
        habits: [...this.state.habits, response.user_habit.habit]
      }))
      .catch(err => {
        console.error(err.message)
        alert(err.message)
      })
  }

// DIFFERENCE IS THIS IT TO ADD HABIT FROM ALREADY GIVEN ACTIVITIES.
// E.TARGET.NAME
addHabit2 = (e) => {
  e.preventDefault()
  fetch("http://localhost:3000/api/v1/habits", {
    method: 'POST',
    headers:{
      Authorization: `Bearer ${window.sessionStorage.accessToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
    body: JSON.stringify({
      habit: {name: `${e.target.name}`
        }
      }),
    })
      .then(res => {
        if (res.ok){
          return res.json()
        }

        else {
          let error= new Error ("Cannot add habit twice")
          throw error
        }
      })
        .then(response => this.setState({
          userhabits: [...this.state.userhabits, response.user_habit],
          habits: [...this.state.habits, response.user_habit.habit]
        }))
        .catch(err => {
          console.error(err.message)
          alert(err.message)
        })
    }

// FUNCTION TO REMOVE HABIT
deleteHabit = (e) => {

  if(e.target.classList.contains("habtype") == false){
    let id = e.target.id
    debugger
        fetch(`http://localhost:3000/api/v1/user_habits/${id}`,{
          method: 'DELETE',
          headers: {
          Authorization: `Bearer ${window.sessionStorage.accessToken}`
            }
        })
          .then(res=>res.json())
          .then(habity => {
            console.log(this.state.userhabits);
            console.log(habity);
            let newHab = this.state.userhabits.filter(habit =>  habit.id !== habity.habit.id  )
              this.setState({
                userhabits: newHab
              })
          })
      }
    }

// END REMOVE


//CLICK HANDLER FOR TOP BAR COLOR SELECTION //

clickHandler = (e) => {
  // COLOR CHOICES //
  if(e.target.attributes[1].value !== "2"){
    const list = {

      0: { code: "Green", label: "Completed 👍" },
      1: { code: "Red", label: "Not Completed 👎" },
      2: { code: "Black", label: "Missed Day 😞" },
      3: { code: "White", label: "Remove 🚫" },

    };
    // END OF COLORCHOICES //

    // GET CHOOSEN COMPLETION COLOR //

    let getGradient = colorId =>
    `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, ${colorId} 100%)`;
    const choosen = document.querySelector("#choosen span");
    // END OF CHOOSEN //

    // SET CHOOSEN TO NULL //

    let selectedMood = null;

    if (e.target.attributes){
      selectedMood = e.target.attributes[1].value;
      choosen.style.background = getGradient(list[selectedMood].code)
      let selection = list[e.target.attributes[1].value]
        this.setState({
          selected: selection
        })
    }
  }
}
// END OF CLICKHANDLER //

// CLICKHANDLERS FOR ARROW MONTH AND DATE CLICK //

onDateClick = day => {  this.setState({
    selectedDate: day
  });}

nextMonth = () => {this.setState({
    currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
  });}

prevMonth = () => {
  this.setState({
  currentMonth: dateFns.subMonths(this.state.currentMonth, 1)})
}


// END OF CLICKHANDLER //

render () {
  // if (window.sessionStorage.length == 0) {
  //     return <Redirect to={'/login'} />;
  // }
// debugger
  console.log(window.sessionStorage.accessToken);

  const list = [
  { code: "Green", label: "Completed 👍", num: 0 },
    { code: "Red", label: "Not Completed 👎", num: 1 },
  { code: "Black", label: "Missed Day 😞", num: 2 },
  ];

// TOP COMPLETION COLOR BAR //

  let topHabit = list.map( choice => < TopHabit key={choice.num} choice ={choice} clickHandler={this.clickHandler}/>)

//   CREATE GRID  //
if(this.state.userhabits !== undefined){
  var row =  this.state.userhabits.map(habit =>

    <Grid instance={this.state.userinstances} allHabits={this.state.habits} key={habit.habit_id} habit= {habit} selected={this.state.selected} current={this.state.currentMonth} userhabits={this.state.userhabits}/>
  )
}

  const dateFormat = "MMMM YYYY";
  if(this.state.activities !== undefined){
  if(this.state.activities.length !== 0){
    // debugger
  var activities = this.state.activities.map(activity => <Activity act={activity} addHabit={(e)=>{this.addHabit2(e)}}/> )
  }
 if (this.state.activities.length == 0){
  // debugger
  var activities = []
}
}

          function clicked() {
          window.sessionStorage.clear()
            this.props.history.push("/")


          }
          const link = {
            width: '100px',
            padding: '12px',
            margin: '0 6px 6px',
            background: 'blue',
            textDecoration: 'none',
            color: 'white',
            ":hover": { color: "#8062ba" }
          }

            const Navbar = () =>
              <div className="bar">
                <NavLink
                  to="/"
                  /* set exact so it knows to only set activeStyle when route is deeply equal to link */
                  className="nav_link"
                  exact
                  /* add styling to Navlink */
                  style={link}
                  /* add prop for activeStyle */
                  activeStyle={{
                    background: 'red'
                  }}
                >Home</NavLink>

                <NavLink
                  to="/habits"
                  exact
                  style={link}
                  activeStyle={{
                    background: 'darkblue'
                  }}
                >Habit Tracker</NavLink>
                <NavLink
                  to="/book"
                  exact
                  style={link}
                  activeStyle={{
                    background: 'darkblue'
                  }}
                >Need to Reads</NavLink>
                <NavLink
                  to="/newbook"
                  exact
                  style={link}
                  activeStyle={{
                    background: 'darkblue'
                  }}
                >New Book</NavLink>
                <NavLink
                  to="/login"
                  exact
                  style={link}
                  activeStyle={{
                    background: 'darkblue'
                  }}
                  onClick={clicked}
                >Logout</NavLink>
              </div>;

              const Navbar2 = () =>
                <div className="bar">

                  <NavLink
                    to="/login"
                    exact
                    style={link}
                    activeStyle={{
                      background: 'darkblue'
                    }}
                  >SignUp/Login</NavLink>

                </div>;


    return (
      <div className="habCon">
      {window.sessionStorage.length == 0 ? <Navbar2 /> : <Navbar />}

        <div className ="oval" >
          <h1 className="title">
            [Habit"  |  -Tracker!#~
          </h1>
        </div>
        <div className="habWrap">
        <img className="board" src="http://www.stickpng.com/assets/thumbs/5b06c18efad1cae04539afdf.png"/>
        <Form allHabits={this.state.userhabits} addHabit={(e)=>{this.addHabit(e)}}/>
        <div id="grid" onClick={(e) => {this.clickHandler(e)}}>
          <div id="choices">
            {topHabit}
          </div>
          <div id="choosen">
            Selected:
            <span>
            </span>
          </div>
        </div>
        <div className="HabitList">
        <div className="HabitBackground">
          <div className="HabitCard">
            <div className="tape" />
            <div className="tape1" />
            <div className="content">
              <div className="header row flex-middle">
                <div className="col col-start">
                  <div className="icon" onClick={this.prevMonth}>
                    chevron_left
                  </div>
                </div>
              <div className="col col-center">
                <span>
                  {dateFns.format(this.state.currentMonth, dateFormat)}
                </span>
              </div>
            <div className="col col-end" onClick={this.nextMonth}>
              <div className="icon">
                chevron_right
              </div>
            </div>
          </div>
            <div id="daysHeader" />
              <div id="tableContainer">
                <DayHeader delete={this.deleteHabit} habits={this.state.habits} userhabits={this.state.userhabits}/>
                <div id="habitHeader">
                  <div id="weekContainer">
                    {row}
                  </div>
                </div>
                </div>
              </div>
            </div>
        </div>
      </div>
        <div className="activities">
        <h1 className="ActHead">ACTIVITIES</h1>
        <p className="ActP2"> (Click the image to get mor info!) </p>

        <p className="ActP"> (Scroll down for more) </p>
          {activities}
        </div>
        </div>
      </div>

    );
  }
}

export default HabitTracker
