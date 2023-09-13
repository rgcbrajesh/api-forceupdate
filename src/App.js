import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.handleEvent = this.handleEvent.bind(this);
  }
  handleEvent() {
    console.log("random number generated");
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <h1>Random Number Generator</h1>
        <h2>Random Number:{Math.floor(Math.random() * 1000)} </h2>
        <button onClick={this.handleEvent}>Click-Me</button>
      </div>
    );
  }
}
