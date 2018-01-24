import React, { Component } from "react";
import FormatTime from "./format_time";

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.update = this.update.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      status: "stopped",
      start: null,
      elapsed: 0
    };
  }
  render() {
    const { elapsed, status } = this.state;
    return (
      <div className="jumbotron">
        <h1 className="display-3">
          <FormatTime elapsed={this.state.elapsed} />
        </h1>
        <hr className="my-3" />
        <p className="lead text-center">{status}</p>
        <p className="text-center">
          <button onClick={this.start} className="btn btn-outline-success mx-3">
            Start
          </button>
          <button onClick={this.stop} className="btn btn-outline-danger mx-3">
            Stop
          </button>
          <button onClick={this.reset} className="btn btn-outline-warning mx-3">
            Reset
          </button>
        </p>
      </div>
    );
  }
  start() {
    const { start, elapsed } = this.state;
    let newStart = new Date().getTime();
    if (start !== null) {
      newStart = newStart - elapsed;
    }
    this.setState({
      status: "running",
      start: newStart
    });
    setTimeout(this.update, 10);
  }
  stop() {
    this.setState({
      status: "stopped"
    });
  }
  update() {
    const { status, start } = this.state;
    if (status === "running") {
      this.setState({
        elapsed: new Date().getTime() - start
      });
      setTimeout(this.update, 10);
    }
  }
  reset() {
    this.setState({
      status: "stopped",
      start: null,
      elapsed: 0
    });
  }
}

export default Stopwatch;
