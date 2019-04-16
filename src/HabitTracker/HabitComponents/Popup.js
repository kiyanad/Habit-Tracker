import React, { Component } from 'react';
import '../HabitCss/HabitTracker.css';
import NewHabit from "./NewHabit"


class Popup extends Component {
  state = {
    done: true
  }

  nun = (e) => {
    e.preventDefault()
    this.setState({
      done: !this.state.done
    })

    var popup = document.getElementById("myPopup");

    popup.classList.toggle("show");
  }

  render(){

    let form = this.props.userhabits.map(habit => <NewHabit new={this.props.new} day={this.props.day}key={habit.id} habit={habit}  date={this.props.date} clickHandler={this.boxHandler}/>)

    return(
      <div className="popup">
          <span className="popuptext show" id="myPopup">
          <form className="instanceform" onSubmit= {(e)=>{this.nun(e)}}>
            {form}
            <button className="popsub">
              Submit
            </button>
          </form>
        </span>
      </div>
    )
  }
}
export default Popup
