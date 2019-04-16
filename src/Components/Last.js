import React, { Component } from 'react';
import '../CSS/Last.css';
import OneLast from "./OneLast"

class Last extends Component {

  render() {
    // let list = this.props.uLasts.map(last => <OneLast last={last} all={this.props.lasts} uInst={this.props.uInst} i={i}/>)

    return (
      <div className="back">
      <img src= "https://clipartstation.com/wp-content/uploads/2018/09/cork-board-clipart-6.jpg" alt="" />
      <div className="Last">
      <div class="paper-background">
      <span class="tack"></span>

  <input class="paper-name" name="name" placeholder="Kiyana Dunlock" type="text" />
  <input class="paper-date" name="date" placeholder="02/15/2019" type="text" />
  <section class="paper-content">
<h1>When Did I Last...</h1>
<OneLast />



<br/>
</section>

</div>
      </div>
      </div>
    )
  }
}
export default Last


// <div className="num"><h2>1.</h2></div>
// <div className="boxes"><h5>Change ToothBrushes</h5></div>
// <div className="inputs"><h4 className="input-1">2/10/19</h4></div>
// <div className="inputs"></div>
// <div className="inputs"></div>
// <div className="inputs"></div>
//
// </div>
//
// <div class="flex-container">
// <div className="num-2"><h2>2.</h2></div>
//
// <div className="boxes-2"><h5>Get Oil Change</h5></div>
// <div className="inputs"><h4 className="input-2">2/15/19</h4></div>
// <div className="inputs"></div>
// <div className="inputs"></div>
// <div className="inputs"></div>
//
// </div>
// <div class="flex-container">
// <div className="num-3"><h2>3.</h2></div>
//
// <div className="boxes-3"><h5>Clean out Fridge</h5></div>
// <div className="inputs" ><h4 className="input-3">2/1/19</h4></div>
// <div className="inputs"></div>
// <div className="inputs"></div>
// <div className="inputs"></div>
//
// </div>
// <div class="flex-container">
// <div className="num-4"><h2>4.</h2></div>
//
// <div className="boxes-4"><h5>Clean the car</h5></div>
// <div className="inputs"><h4 className="input-4">2/15/19</h4></div>
// <div className="inputs"></div>
// <div className="inputs"></div>
// <div className="inputs"></div>
//
// </div>
// <div class="flex-container">
// <div className="num-5"><h2>5.</h2></div>
//
// <div className="boxes-5"> <h5>Wash Bedding</h5></div>
// <div className="inputs"><h4 className="input-5">2/4/19</h4></div>
// <div className="inputs"></div>
// <div className="inputs"></div>
// <div className="inputs"></div>
//
// </div>
// <div class="flex-container">
// <div className="num-6"><h2>6.</h2></div>
//
// <div className="boxes-6"><h5>Go Grocery Shopping</h5></div>
// <div className="inputs"><h4 className="input-6">2/6/19</h4></div>
// <div className="inputs"></div>
// <div className="inputs"></div>
// <div className="inputs"></div>
