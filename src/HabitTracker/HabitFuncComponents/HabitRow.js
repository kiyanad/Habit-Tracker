import React from 'react';
import del from "../../img/cancel.png"

function HabitRow(props) {
console.log(props.habit);
return (
  <div className="seperate">
    <img className="cancel" id={props.habit.id} src={del} onClick={(e) => {props.delete(e)}}/>
    <p className="habtype" onClick={(e) => {props.delete(e)}}>
      {props.habit.habit.name}
    </p>
      <div className="namecon">
        <div className= "weekContainer">
          <div className= "monthContainer" id={props.habit.id} />
        </div>
      </div>
    </div>
  )
}

export default HabitRow
