import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Login from "./Components/Login"

import HabitTracker from "./HabitTracker/HabitComponents/HabitTracker"
import Book from "./Components/Book"
import Daily from "./Components/Daily"
import Index from "./Components/Index"
import Last from "./Components/Last"
import QuoteCard from "./Components/QuoteCard"
import NewBook from "./Components/NewBook"
import Home from "./Components/Home"


function clicked() {
window.sessionStorage.clear()
  this.props.history.push("/")


}

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
  ":hover": { color: "#8062ba" }
}


const Navbar = () =>
  <div className="bar">
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      className="nav_link"
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'red'
      }}
    >Home</NavLink>

    <NavLink
      to="/habits"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Habit Tracker</NavLink>
    <NavLink
      to="/book"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Need to Reads</NavLink>
    <NavLink
      to="/newbook"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >New Book</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      onClick={clicked}
    >Logout</NavLink>
  </div>;

  const Navbar2 = () =>
    <div className="bar">

      <NavLink
        to="/login"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >SignUp/Login</NavLink>

    </div>;


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render((
  <Router>
    <React.Fragment>
    <Route exact path="/" component={Index} />
      <Route exact path="/habits" component={HabitTracker} />
      <Route path="/book" component={routerProps => (
        <Book />
      )}/>
      // <Route exact path="/book" component={Book} />
      <Route exact path="/lasts" component={Last} />
      <Route exact path="/daily" component={Daily} />
      <Route exact path="/newbook" component={NewBook} />
        <Route exact path="/login"
        render={(routerProps) => <Home prop={routerProps}/>}  />




    </React.Fragment>
  </Router>),
  document.getElementById('root')
);

// <Route exact path="/about" component={About} />
// <Route exact path="/login" component={Login} />
// <Navbar />


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
