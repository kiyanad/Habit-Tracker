import React, { Component } from 'react';
// import { WiredButton, WiredInput } from "wired-elements"
import field from "../Images/field.png"


// import 'wired-elements';


class Activity extends Component {

state = {
  clicked: false
}
clickHandler= () => {
  this.setState({
    clicked: !this.state.clicked
  })
}
  render() {
    return (
      <div onClick={this.clickHandler}className="act">


      {this.state.clicked? <div className="desc">  <h4 className="actName"> {this.props.act.name} </h4> <br /><br />{this.props.act.description}< br/ > <button onClick={this.props.addHabit}className="actbut" name={this.props.act.name}> Add Habit </button></div>:  <h4 className="actName"> {this.props.act.name} <br />   <img className= "actImage" src={this.props.act.image_url} /></h4>}

      </div>

  )}
}
export default Activity
