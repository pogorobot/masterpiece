import React, { Component } from 'react';

class Masterpiece extends Component {

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
    if (this.state.clicked) {
      return (
        <div>
          <p className="Master"><Master /></p><p className="Piece"> <Piece /></p>
          <p>The purpose of a masterpiece is to demonstrate mastery.</p>
          <p>How have you demonstrated mastery today?</p>
          <p>Here should go a text box</p>
          <p>Here should go a button</p>
          <p>Here's How</p>
        </div>
      );
    }
    else {
      return (
          <p className="Masterpiece" onClick={this.handleClick}>masterpiece</p>
      );
    }
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
      <span className="Master">master</span>
    );
  }
}

class Piece extends Component {
  render() {
    return (
      <span className="Piece">piece</span>
    );
  }
}

export default Masterpiece;