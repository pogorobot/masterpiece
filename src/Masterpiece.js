import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Timer from './Timer.js'

class Masterpiece extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.timeout = this.timeout.bind(this);

    this.state = {clicked: false, seconds: 10, speed: -1 };
  }


  handleClick(e) {
    this.setState(prevstate => ({
      clicked: true
    }));
  }

  render() {

    if (this.state.clicked) {
      return (
        <div>
          <h2>JadeBot Is A Tank Build</h2>
          <p><Master /> <Piece /></p>
          <Router>
            <div>
              <Timer start={new Date()} seconds={this.state.seconds} speed={this.state.speed} onTimeout={this.timeout} />
              <div className="Masterpiece">
                <ol>
                  <li>Recruit</li>
                  <li>Reinforce</li>
                  <li>Relocate</li>
                </ol>
                <p>Okay, so</p>
                <p>It's a strategy game.</p>
                <p>The steps above are the basic loop.</p>
                <p>Recruit by drawing some cars.</p>
                <p>Reinforce by playing some cars (in exchange for gold).</p>
                <p>Relocate by using cars' abilities.</p>
                <p>Your entire goal is to move large quantities of Stuff from point A to point B.</p>
                <p>You win once all the Stuff has been moved.</p>
                <p>So a basic shit-tier car has 1 cost, 1 capacity, 1 speed</p>
                <p>Each turn (10s) it takes 1 stuff 1 km</p>
              </div>

              <Route path="/base" component={Base} />
            </div>
          </Router>
        </div>
      );
    }
    else {
      return (
          <p className="Masterpiece" onClick={this.handleClick}>masterpiece</p>
      );
    }
  }

  timeout() {
    this.setState(prevstate => ({
      seconds: prevstate.seconds * 10,
      speed: prevstate.speed * 7
    }));
  }


}

class Master extends Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(prevstate => ({
      clicked: true
    }));
  }

  render() {
    return (
      <div className="Master">
        <p>shipping</p>
      </div>
    );
  }
}

class Piece extends Component {
  render() {
    return (
      <div className="Piece">
        <p>routes</p>
      </div>
    );
  }
}

class Base extends Component {
  render() {
    return (
      <h2>YOU ARE IN THE BASE</h2>
    )
  }
}

export default Masterpiece;