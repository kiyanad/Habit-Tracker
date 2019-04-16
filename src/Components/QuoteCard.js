import React, { Component } from 'react';
import '../CSS/QuoteCard.css';

class QuoteCard extends Component {
  render() {
    return (
      <div className="QuoteBack">
      <div class="container">
  <input type="radio" id="fc1" name="cards" />
  <label for="fc1">
    <h1>Quote 1</h1>
  </label>

  <input type="radio" id="fc2" name="cards" />
  <label for="fc2">
    <h1>Quote 2</h1>
  </label>

  <input type="radio" id="fc3" name="cards" />
  <label for="fc3">
    <h1>Quote 3</h1>
  </label>

  <input type="radio" id="fc4" name="cards" />
  <label for="fc4">
    <h1>Quote 4</h1>
  </label>

</div>
      </div>
    )
  }
}
export default QuoteCard
