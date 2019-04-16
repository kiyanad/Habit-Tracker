import React, { Component } from 'react';
import field from "../Images/field.png"


class Form extends Component {
  state = {
    name: "",
    userhabits: []
  }

  changeHandler = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

addHabit = (e) => {
  fetch("http://localhost:3000/api/v1/userhabits", {
    method: 'POST',
    headers:{
      Authorization: `Bearer ${window.sessionStorage.accessToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
    body: JSON.stringify({
      name: `${e.target.name.value}`
      }),
    })
      .then(res => res.json())
      .then(response => console.log(response))
}

  render() {
    return (
      <div className="habCon2">
        <form  className="habitform" onSubmit= {(e)=>{this.props.addHabit(e, this.state)}}>
          New Habit Form!!!
          <br />
          <br />
          <div className="formContainer">
          Habit Name:
          <br />
          <input className="nameput" onChange= {this.changeHandler} name = "name" placeholder="Name"  />
          <br />
          <button className="habBut"> Submit </button>
          </div>
        </form>
      </div>
    )
  }
}
export default Form
