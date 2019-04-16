import React from "react";
import '../CSS/Login.css';
import smiley from '../img/smiley.png'
import logo from '../img/logo_transparent.png'
import Login from '../Components/Login'
import SignUp from '../Components/SignUp'
import { Route } from 'react-router-dom'
import { BrowserRouter as Router, NavLink } from 'react-router-dom';



class Home extends React.Component {
  state = {
    login: false,
    signup: false
  }

  componentDidMount(){

        if (window.sessionStorage.valueOf().length !== 0) {
           if(window.sessionStorage.valueOf().accessToken){
          debugger
          if(this.props !== undefined){
            // debugger
            return this.props.prop.history.push('/')

            // return history.push("/")
          }
        }
      }
  }

  boom = () => {
    this.setState({
      login: !this.state.login,
      signup: false
    })
    console.log("clicked");
  }

  bam = () => {
    this.setState({
      signup: !this.state.signup,
      login: false
    })
    console.log("clicked");
  }

 // componentDidMount(){
 //   // debugger
 //
 //  }

      //
  render() {

    if(this.state.loggedin){
     return this.props.history.push("/")
    }

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

    return(

      <div className="back">
      {window.sessionStorage.length == 0 ? <Navbar2 /> : <Navbar />}
      <div className="wrapper1">
      <img className="loglogo" src={logo} />
      <div className="cellphone" onClick={this.boom}>
      <p className="signup" onClick={this.boom} >Sign Up!!!</p>
      <img  onClick={this.boom}  className ="smiley" src={smiley}/>
      <p className="click" onClick={this.boom} > (Click Here) </p>
      </div>
      <div onClick={this.bam} className="lognote">
      <p className="login" onClick={this.bam}>Log In!!!!</p>
      <p className="click2" onClick={this.bam}> (Click Here) </p>
      <img  className ="smiley2" src={smiley} onClick={this.bam}/>


      </div>


      {this.state.login ?  <Route path="/login" component={routerProps => <Login {...routerProps} />} />: null}
      {this.state.signup ? <Route path="/login" component={routerProps => <SignUp {...routerProps}/> } />: null}

      </div>
      </div>
    )
  }
}
export default Home
