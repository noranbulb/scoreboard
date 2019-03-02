import React, {Component} from 'react';

export class Stopwatch extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time"></span>
        <button>Start</button>
        <button>Rest</button>
      </div>
    )
  }
}
