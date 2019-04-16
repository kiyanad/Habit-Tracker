import React from 'react';
import HabitRow from "./HabitRow"

function DayHeader(props) {
  if (props.userhabits !== undefined){
    var row = props.userhabits.map(habit => <HabitRow delete={props.delete}key={habit.id} habit= {habit} allhabits= {props.userhabits}/>)
    }
  return (
    <div className= "habitHeader">
      {row}
    </div>
  )
}
export default DayHeader
