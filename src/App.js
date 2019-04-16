import React, { Component } from 'react';
// import './App.css';
// import Last from "./Components/Last"
import HabitTracker from "./HabitTracker/HabitComponents/HabitTracker"




class App extends Component {

  state = {
    userhabits: [],
    habits: [],
    last: [],
    userlasts: [],
    lastsInstance: []
  }

  // componentDidMount(){
  //   // FETCH TO GET LIST OF USER HABITS //
  //     fetch("http://localhost:3000/api/v1/user_habits")
  //       .then(res=>res.json())
  //       .then(habits => this.setState({
  //         userhabits: habits.user_habit
  //         })
  //     )
  //   // FETCH TO GET LIST OF USER Lasts //
  //     fetch("http://localhost:3000/api/v1/user_lasts")
  //       .then(res=>res.json())
  //       .then(lasts => this.setState({
  //         userlasts: lasts.user_last
  //       })
  //     )
  //   // FETCH TO GET LIST OF ALL HABITS
  //     fetch("http://localhost:3000/api/v1/habits")
  //       .then(res=>res.json())
  //       .then(habits => this.setState({
  //         habits: habits.habit
  //       })
  //     )
  //   // FETCH TO GET LIST OF ALL LASTS
  //     fetch("http://localhost:3000/api/v1/lasts")
  //       .then(res=>res.json())
  //       .then(lasts => this.setState({
  //         lasts: lasts.last
  //       })
  //     )
  //     // FETCH TO GET LIST OF ALL LAST Instances
  //       fetch("http://localhost:3000/api/v1/user_last_instances")
  //         .then(res=>res.json())
  //         .then(lastsInstance => this.setState({
  //           lastsInstance: lastsInstance.user_last_instance
  //         })
  //       )
  // }

  render() {
    return (
      <div className="App">
      <HabitTracker/>
      </div>
    );
  }
}

export default App;
// <Last lasts={this.state.lasts} uLasts={this.state.userlasts} uInst={this.state.lastsInstance}/>
