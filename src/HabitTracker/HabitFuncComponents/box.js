import React from 'react';
import BigBox from "../HabitComponents/bigBox"
import dateFns from "date-fns";
import differenceInDays from 'date-fns/difference_in_days'


function Box(props){
    const monthStart = dateFns.startOfMonth(props.month);

    const monthEnd = dateFns.endOfMonth(monthStart);

    var result1 = differenceInDays(
      monthEnd, monthStart
      )

    var result = result1 + 1

    let monthLength = Array.from({length: result}, (x,i) => i);

    let eachDay = monthLength.map(day => <BigBox instance={props.instance} key={day} day= {day} monthNum={props.monthNum} userhabits={props.userhabits} habit={props.habit} allHabits={props.allHabits} selected={props.selected}/>)

    let day = monthStart;

  return (
    <div className="row" id= {props.habit.name}key={day}>
      {eachDay}
    </div>
  )
}


export default Box
