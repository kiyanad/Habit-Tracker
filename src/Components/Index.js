import React, { Component } from 'react';
import '../CSS/Index.css';
import logo from '../img/logo_transparent.png'
import habit from '../img/habit3.png'
import book from '../img/books.png'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';






class Index extends Component {

componentDidMount() {



  setInterval(twitch, 800);
  const num = [ "Live","Love", "Laugh"];
  const color = ["blue", "green", "red", "purple", "orange", "yellow"]
  var item = color[Math.floor(Math.random()*color.length)];

  let i = 1;
  function twitch() {
    let shown = document.querySelector(".shown");
    let hidden = document.querySelector(".hidden");
    let wait = document.querySelector(".wait");

if(shown !== null && hidden !== null && wait !== null){
  shown.classList.replace("shown", "hidden");
    shown.style.color = item
    hidden.style.color = color[i+1]
    wait.style.color = color[i+2]
    // wait2.style.color = color[i]




    // debugger

    shown.classList.replace("shown", "hidden");
    hidden.classList.replace("hidden", "wait");
    wait.classList.replace("wait", "shown");

    wait.textContent = num[i];
    if (i === 4) i = 0;
    else i++;
  }
  }

}

  render() {


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

    if (window.sessionStorage.length == 0) {
        return <Redirect to={'/login'} />;
    }
    // console.log(this.state.userhabits[0].user.name);
    return (
      <div className="indexDiv">
      {window.sessionStorage.length == 0 ? <Navbar2 /> : <Navbar />}



      <img className="inlog" src={logo} />
      <img className="journal" src="http://clipart-library.com/img1/1401167.png"/>
<div className="paper">

<div className="container3">
  <div className="hidden"></div>
  <div className="shown"></div>
  <div className="wait"></div>
</div>


  <div className="heart"></div>
  <div className="title">
    <div className="uppercase">
    (Index)
    </div>
    <div className="doodle"></div>
    <img className="doodle1" src="https://cdn.pixabay.com/photo/2016/06/04/09/32/heart-1435220__340.png" />
    <img className="doodle2" src="https://images.vexels.com/media/users/3/151126/isolated/preview/730e04223aea0616b0d07bcf8e7794d6-money-bag-doodle-by-vexels.png" />
    <img className="doodle3" src="https://images.vexels.com/media/users/3/151056/isolated/preview/0aca0163b618d8c3618b0b11f1ef2200-incandescent-light-bulb-doodle-icon-by-vexels.png" />
    <img className="doodle4" src="http://endlessicons.com/wp-content/uploads/2012/09/ghost-icon.png?w=640" />
    <img className="doodle5" src="https://ya-webdesign.com/images/doodle-star-png-6.png" />
    <img className="doodle6" src="https://toppng.com/public/uploads/preview/white-paper-plane-11530995674lwusjorqrk.png" />
    <img className="doodle7" src="https://newvitruvian.com/images/stargazing-drawing-aesthetic-6.png" />
    <img className="doodle8" src="https://newvitruvian.com/images/drawing-balloons-sketch-3.png" />
  </div>

  <div className="tape-1"></div>
  <Link to="/habits">

  <img className="hab" src={habit} />
  </Link>

  <p className="habname"> HabitTracker </p>



  <div className="photo">
  <Link to="/book">
  <img className="reads" src={book} />
  </Link>
    <p className="bookname"> Need to Reads </p>
    <div className="tape"></div>
  </div>
</div>
</div>
);
}

}

export default Index








// <div className="grid-container">
//   <div className="cell2">
//     Bullet Entry
//   </div>
//   <div className="cell3">
//   Page
//   </div>
//   <div className="cell2">
//     <a href="">T</a>
//   </div>
//   <div className="cell3">
//   6
//   </div>
//   <div className="cell2">
//   <a href="">T</a>
//   </div>
//   <div className="cell3">
//   6
//   </div>
//   <div className="cell2">
//   <a href="">T</a>
//   </div>
//   <div className="cell3">
//   6
//   </div>
//   <div className="cell2">
//   <a href="">T</a>
//   </div>
//
//   <div className="cell3">
//   6
//   </div>
//   <div className="cell2">
//   <a href="">T</a>
//   </div>
//   <div className="cell3">
//   6
//   </div>
//   <div className="cell2">
//   <a href="">T</a>
//   </div>
//   <div className="cell3">
//   6
//   </div>
//   <div className="cell2">
//   <a href="">T</a>
//   </div>
//   <div className="cell3">
//   6
//   </div>
//   <div className="cell2">
//   <a href="">T</a>
//   </div>
//   <div className="cell3">
//   6
//   </div>
//   <div className="cell2">
//   <a href="">T</a>
//   </div>
//   <div className="cell3">
//   6
//   </div>
// </div>
