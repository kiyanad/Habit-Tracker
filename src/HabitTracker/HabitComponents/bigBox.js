import React, { Component } from 'react';
// import '../HabitCss/HabitTracker.css';
import NewHabit from "./NewHabit"
import Popup from "./Popup"
import isFuture from 'date-fns/is_future'
import endOfToday from 'date-fns/end_of_today'
import getDate from 'date-fns/get_date'
import getMonth from 'date-fns/get_month'
import isPast from 'date-fns/is_past'


class BigBox extends Component {
  state = {
    selected: null,
    done: true,
    all: [],
    selection: false,
    habit: [],
    instance: [],
    missed: false,
    first: false

  }

   // COMPONENTDIDMOUNT //
  componentDidMount(){
    // FETCH FOR USER INSTANCES //
    var today = this.props.day

    var past = isPast(new Date(2019, `${this.props.monthNum}`,  `${today}`))

    if(this.props.habit !== undefined){
      var myBox = `${this.props.habit.name}-${this.props.monthNum}-${today}`
      var box2 = document.getElementById(myBox)
    // debugger
      if (box2 !== null && past && box2.style.background == ""){
        box2.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, black 100%)`
      }

      if (past) {
        this.setState({
          missed: true
        })
      }
    }

//FETCH TO GET USER INSTANCES //
  fetch("http://localhost:3000/api/v1/user_instances",{
    method: 'GET',
    headers: {
    Authorization: `Bearer ${window.sessionStorage.accessToken}`
    }
  })
    .then(res=>res.json())
    .then(instance => this.setState({
      instance: instance.user_instance
      })
    )
    // END OF FETCH//

  var day = this.props.day + 1

  var future = isFuture(new Date(2019,`${this.props.monthNum}`,  `${day}`))

  var date = new Date(2019,`${this.props.monthNum}`,  `${day}`)

  var past = isPast(new Date(2019, `${this.props.monthNum}`,  `${day}`))


this.setState({
  all: this.props.allHabits,
  habit: this.props.habit,
  future: future
})

var endOfDay = endOfToday()
var d = getDate(endOfDay)
var mo = getMonth(endOfDay)
var to = mo + "-" + d

var todays = document.getElementsByName(`${to}`)

// FOR EACH BOX WHERE THE DAY IS TODAY MAKE IT YELLOW
todays.forEach(today => today.style.background = 'yellow')


if(this.props.userhabits.length !== 0){
  if(this.props.userhabits[0].habit_id == this.props.habit.id){
    this.setState({
      first:true
      })
    }
  }
}
// END OF COMPONENTDIDMOUNT //

// CLICKHANDLER FOR SELECTED DATE //
clickHandler = (event) => {
  this.setState({
    selected: this.props.monthNum + "-" + event.target.innerText
  })
}
// END OF CLICKHANDLER //

// CLICKHANDLER FOR BOX CLICK //
newHandler = (event, i) => {
  this.setState({
    selection: !this.state.selection
  })

// SETS BOX COLOR //
  let box = document.getElementById(`${event.target.id}`)
  if(this.props.selected !== null){
    {this.state.selection ?   box.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, white 100%)` :   box.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, ${this.props.selected.code} 100%)`}
  }
// END BOX COLOR //

// FOR PATCH FETCH //
var day = this.props.day +1

var date = this.props.monthNum + "-" + `${day}`

var habit_id = this.props.habit.id

var status = this.state.selection

var userHabitId = this.props.userhabits.find(habit => habit.habit.id == habit_id)
// debugger
// POST FOR MISSED DAY
if(this.props.selected !== null){
  if(this.props.selected.code === "Red"){
    fetch("http://localhost:3000/api/v1/user_instances", {
      method: 'POST',
      headers:{
        Authorization: `Bearer ${window.sessionStorage.accessToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'

        },
      body: JSON.stringify({
        user_habit_id: `${userHabitId.id}`,
        status:false,
        date:`${date}`
        }),
      }).then(res => res.json())
        .then(response => this.setState({
          instance: [...this.state.instance, response.user_instance ]
        }))
    }
  }

// POST FOR COMPLETED DAY //
if(this.props.selected !== null){
  if(this.props.selected.code === "Green"){
    fetch("http://localhost:3000/api/v1/user_instances", {
      method: 'POST',
      headers:{
        Authorization: `Bearer ${window.sessionStorage.accessToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        user_habit_id: `${userHabitId.id}`,
        status:true,
        date:`${date}`
        }),
      })
        .then(res => res.json())
        .then(response => console.log(response))
    }
  }
}

render(){

  // GIVES ME TODAYS DATE //
  var endOfDay = endOfToday()
  //GIVES ME DAY //
  var d = getDate(endOfDay)
  // GIVES ME MONTH //
  var mo = getMonth(endOfDay)
  // GIVE ME MO-DAY I.E "1-13"
  var to = mo + "-" + d
  // SAVING THIS BOXS DAY TO A VARIABLE **//
  var today = this.props.day
  // CHECKING IF THIS BOX IS A PAST DAY //
  var past = isPast(new Date(2019, `${this.props.monthNum}`,  `${today}`))

  var day = this.props.day + 1

  // IF USERINSTANCE EXIST SETS COLOR **//
  if(this.props.instance.length !== 0){

      let vary = `${this.props.monthNum}-${day}`

      let uIs = this.props.instance

      if(uIs.length !== 0 ){

        let completed = uIs.filter(instance => instance.date === vary)
         if (completed[0] ){
          completed.map(complete => {
            var mine = this.props.allHabits.find(habit => complete.user_habit_id === habit.id)
              if(mine !== undefined){
                var selected = `${mine.name}-${this.props.monthNum}-${day}`

                let box = document.getElementById(selected)
                if (box !== null){
                  {complete.status ? box.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, green 100%)`: box.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, red 100%)`}
                }
              }

              var mine_use = this.state.all.find(habit => complete.user_habit_id === habit.id)
              let found = this.props.instance.find(inst => inst.user_habit_id === this.props.habit.id)

            })
          }
        }
      }

    // END OF SET COLOR//

  let form = this.props.userhabits.map(habit => <NewHabit new={this.newHandler}day={day}key={habit.id} habit={habit} all={this.props.allHabits} date={this.props.monthNum} clickHandler={this.boxHandler}/>)

    return(
      <div className="dd">
        {this.state.selected? <Popup new={this.newHandler} day={day} date={this.state.selected} userhabits={this.props.userhabits} /> : null}
        {this.state.first && mo === this.props.monthNum && day === d ?
          <p className="pclick2" onClick={(event) => {this.clickHandler(event)}}>
            {day}
          </p>:
            null}
          {this.state.first && mo === this.props.monthNum && day !== d?
            <p className="pclick">
              {day}
            </p> :
            null}
          {this.state.first && mo !== this.props.monthNum ?
            <p className="pclick">
              {day}
            </p> :
            null}
            {this.state.future?
            <div id={`${this.props.habit.name}-${this.props.monthNum}-${day}`} name={`${this.props.monthNum}-${day}`}className={`dayContainer ${this.props.habit.name}`} key={day} /> :
            <div id={`${this.props.habit.name}-${this.props.monthNum}-${day}`} name={`${this.props.monthNum}-${day}`}className={`dayContainer ${this.props.habit.name}`} key={day} onClick={this.newHandler} />
            }
      </div>
    )
  }
}
export default BigBox
