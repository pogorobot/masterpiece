import React, { Component } from 'react';


function handleClick(e) {
  console.log("ummm");
}

class Faithless extends Component {


  render() {
    return (
        <p className="Faithless" onClick={handleClick}>faith | less</p>
    );
  }


}

export default Faithless;