import React, { Component } from 'react';

class TopHabit extends Component {


componentDidMount(){
  // COLOR CHOICES //
  const list = {
    0: { code: "Green", label: "Completed 👍" },
    1: { code: "Red", label: "Not Completed 👎" },
    2: { code: "Black", label: "Missed Day 😞" },
  };
  // END COLOR CHOICES //

  let getGradient = colorId =>
  `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, ${colorId} 100%)`;
    let color = document.getElementById(`color-${this.props.choice.num}`)
    let num = this.props.choice.num
        color.style.background = getGradient(list[num].code);
  }

  render() {
    const list = {
      0: { code: "Green", label: "Completed 👍" },
      1: { code: "Red", label: "Not Completed 👎" },
      2: { code: "Black", label: "Missed Day 😞" },
      3: { code: "White", label: "Remove 🚫" },
    };

    return (
      <div>
        <span id={`color-${this.props.choice.num}`} mood={this.props.choice.num} onClick={this.props.clickHandler} />
        <p>
          {list[this.props.choice.num].label}
        </p>
      </div>
    )
  }
}
export default TopHabit
