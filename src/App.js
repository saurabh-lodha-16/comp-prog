import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const cron = require("node-cron");
const links = require("./output");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.generateRandomIndex(),
      changed: false
    };
  }

  generateRandomIndex = () => {
    return Math.floor(Math.random() * 720);
  };

  setIndexAfterCron = () => {
    if (!this.state.changed) {
      cron.schedule("* */23 * * *", () => {
        const index = this.generateRandomIndex();
        this.setState({ index, changed: true });
      });
    }
  };

  render() {
    this.setIndexAfterCron();
    return (
      <div className="App">
        <header className="App-header">
          <div className="p-2">
            <h1> It seems there was a need...</h1>
          </div>
          <div className="mt-4">
            <a
              className="App-link"
              href={links[this.state.index]}
              target="_blank"
              rel="noopener noreferrer"
            >
              QUESTION FOR THE DAY
            </a>
          </div>
        </header>
        <div>Had to be created for Saurabh Lodha &#10084;</div>
      </div>
    );
  }
}
