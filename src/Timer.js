import React, { Component } from 'react';

class Timer extends Component {

  constructor(props) {
    super(props);
    this.state = {elapsed: 0};

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    // componentDidMount is called by react when the component 
    // has been rendered on the page. We can set the interval here:
    this.timer = setInterval(this.tick, 50);
  }

  componentWillUnmount() {
    // This method is called immediately before the component is removed
    // from the page and destroyed. We can clear the interval here:
    clearInterval(this.timer);
  }

  tick() {
    // This function is called every 50 ms. It updates the 
    // elapsed counter. Calling setState causes the component to be re-rendered
    this.setState({elapsed: new Date() - this.props.start});
  }

  render() {
    
    // Calculate elapsed to tenth of a second:
    var elapsed = Math.round(this.state.elapsed / 100);

    // This will give a number with one digit after the decimal dot (xx.x):
    var seconds = (this.props.seconds + (elapsed / 10 * this.props.speed)).toFixed(1);

    if (seconds < 0) {
      seconds = 0.0;
      this.props.onTimeout();
    }

    return (
      <div className="Timer">
        <p>{seconds}</p>
      </div>
    );
  }
}

export default Timer;