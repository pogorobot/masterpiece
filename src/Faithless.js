import React, { Component } from 'react';

class Faithless extends Component {

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
        <p className="Faithless"><Master /> <Piece /></p>
      );
    }
    else {
      return (
        <p className="Faithless" onClick={this.handleClick}>masterpiece</p>
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
      <span>master</span>
    );
  }
}

class Piece extends Component {
  render() {
    return (
      <span>piece</span>
    );
  }
}

export default Faithless;