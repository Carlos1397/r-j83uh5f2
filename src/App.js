import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.contarcadena = this.contarcadena.bind(this); 
  }
  contarcadena(event) {
    this.setState({
      count:  event.target.value.length
    })
  }
  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.contarcadena}></textarea>
        <div className="counter">{this.state.count}</div>
      </div>
    );
  }

}

export default App;
