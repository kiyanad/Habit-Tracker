import React, { Component } from 'react';
import '../CSS/SelfTend.css';

class SelfTend extends Component {
  render() {
    return (
      <div className="QuoteBack">
      <div class="paper-background">

        <input class="paper-name" name="name" placeholder="Kiyana Dunlock" type="text" />
        <input class="paper-date" name="date" placeholder="02/15/2019" type="text" />
        <section class="paper-content">
        <div className="flex-container">
        <div className="column-1"></div>
        <div className="column-2"></div>
        <div className="column-3"></div>
        </div>

        </section>
        </div>
      </div>
    )
  }
}
export default SelfTend
