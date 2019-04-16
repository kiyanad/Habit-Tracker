import React from 'react';
import  Box from "./box"
import getMonth from 'date-fns/get_month'

// CREATES GRID BOXES //

function Grid(props) {
    var result = getMonth(props.current)
    let found = props.allHabits.find(habit => habit.id === props.habit.habit_id)
      if (found !== undefined){
        var g = found
      }
    return(
      <div className="monthContainer" id={props.habit.habit.id}>
        <Box instance={props.instance} month={props.current} monthNum={result} userhabits={props.userhabits} habit= {props.habit.habit} allHabits={props.allHabits} selected={props.selected}/>
      </div>
    )
}
export default Grid
