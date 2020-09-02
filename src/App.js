// @ts-check

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      currentCountdown: 'session',
      timeInSeconds: 25 * 60,

    }
    /* don't think need two separate increment & decrement functions for both break & session. 
    ** maybe combine them into just two functions. Question remains: how do I achieve that? Either
    ** pass args or have to do some checking in the function. 
    ** Will do this later */
    this.decrementBreak = this.decrementBreak.bind(this);
    this.incrementBreak = this.incrementBreak.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.incrementSession = this.incrementSession.bind(this);
    this.onCountdown = this.onCountdown.bind(this);
    this.start = this.start.bind(this); //tbh, should look to combine start & stop to be just one funtion.
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  decrementBreak() {
    if (this.state.breakLength > 0) {
      this.setState({
        breakLength: this.state.breakLength - 1
      })
    }
  }

  incrementBreak() {
    if (this.state.breakLength < 60) {
      this.setState({
        breakLength: this.state.breakLength + 1
      })
    }
  }

  /* Note to self: Have to manually do the substraction/addition to the var timeInSeconds
   * here, otherwise the state timeInSeconds will lag in updating its value.
   * Lag here means it will update its value in the next function call instead of current call.
   * 
   * Credit to Lam Pham's React pomodoro clock (https://github.com/completejavascript/pomodoro-clock) 
   * for helping me solve this issue
   */
  decrementSession() {
    if (this.state.sessionLength > 0) {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        timeInSeconds: (this.state.sessionLength - 1) * 60,
      })
    }
  }

  incrementSession() {
    if (this.state.sessionLength < 60) {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        timeInSeconds: (this.state.sessionLength + 1) * 60,
      })
    }
  }

  onCountdown() {
    this.setState({
      timeInSeconds: this.state.timeInSeconds - 1
    })
  }

  start() { };
  stop() { };
  reset() { };

  render() {
    return (
      <div className="app">
        <h1>Pomodoro Clock</h1>
        <div className="control-pnl">
          <SettingComponent
            name="Break"
            time={this.state.breakLength}
            increment={this.incrementBreak}
            decrement={this.decrementBreak}
          />
          <SettingComponent
            name="Session"
            time={this.state.sessionLength}
            increment={this.incrementSession}
            decrement={this.decrementSession}
          />
        </div>
        <div className="time">
          <Time time={this.state.sessionLength} />
        </div>
        <div className="bottom-pnl">
          <StartStop />
        </div>
      </div>
    )
  }
}

class SettingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time
    }
  }

  render() {
    return (
      <div>
        <div id="break-label">{this.props.name}</div>
        <div className="control">
          <div id="break-decrement" className="btn" onClick={this.props.decrement}> - </div>
          <div id="break-length">{this.props.time}</div>
          <div id="break-increment" className="btn" onClick={this.props.increment}> + </div>
        </div>
      </div>
    )
  }
}

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time
    }
  }

  render() {
    return (
      <div>
        <div>{this.props.time}</div>
      </div>
    )
  }
}

class StartStop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSession: this.props.currentSession,
    }
  }

  render() {
    return (
      <div>
        <div className="button"></div>
      </div>
    )
  }
}

export default App;
