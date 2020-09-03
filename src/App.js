import React from 'react';
import ReactFCCTest from 'react-fcctest';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      currentSession: 'session',
      timeInSeconds: 25 * 60, //seems like using sessionLength * 60 doesn't work. Yeah, I still sucks at React 😣
      isStart: 0, //either start or stop. passed to component startStop to indicate status
      intervalId: null, //set intervalId to null on initial load
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
    this.toggleStartStop = this.toggleStartStop.bind(this);
    this.switchStatus = this.switchStatus.bind(this);
    this.reset = this.reset.bind(this);
    this.calculateMinutesAndSeconds = this.calculateMinutesAndSeconds.bind(this);
  }

  //can only increment and decrement if it's not starting
  decrementBreak() {
    if (this.state.breakLength > 1 && !this.state.isStart) {
      this.setState({
        breakLength: this.state.breakLength - 1
      })
    }
  }

  incrementBreak() {
    if (this.state.breakLength < 60 && !this.state.isStart) {
      this.setState({
        breakLength: this.state.breakLength + 1
      })
    }
  }

  /* Note to self: Have to manually do the substraction/addition to the var timeInSeconds
   * here, otherwise the state timeInSeconds will lag in updating its value.
   * Lag here means it will update its value in the next function call instead of current call.
   * 
   * Credit to Lam Pham's cool pomodoro clock (https://github.com/completejavascript/pomodoro-clock) 
   * code for helping me solve this issue 
   */

  decrementSession() {
    if (this.state.sessionLength > 1 && !this.state.isStart) {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        timeInSeconds: (this.state.sessionLength - 1) * 60,
      })
    }
  }

  incrementSession() {
    if (this.state.sessionLength < 60 && !this.state.isStart) {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        timeInSeconds: (this.state.sessionLength + 1) * 60,
      })
    }
  }

  //Handle counting down the time by decrementing the remaining seconds by 1.
  onCountdown() {
    this.setState({
      timeInSeconds: this.state.timeInSeconds - 1
    });
  }

  toggleStartStop() {
    if (!this.state.isStart) { //eslint suggest me using '===' instead of '=='. Guess I'll follow
      this.setState({
        isStart: 1, //toggle (change 😉) from start to stop
        intervalId: setInterval(() => { //use setInterval to repeatingly call the onCountdown functionS
          this.onCountdown();
          this.switchStatus();
        }, 1000)
      });
    } else {
      clearInterval(this.state.intervalId); //clear intervalId and also halt the countdown

      this.setState({
        isStart: 0, //if 'start', ask it to 'stop'
        intervalId: null, //set intervalId to null again
      })
    }
  }

  switchStatus() {
    if (this.state.timeInSeconds < 0) { //end of session
      if (this.state.currentSession === 'break') {
        this.setState({
          currentSession: 'session',
          timeInSeconds: this.state.sessionLength * 60,
        })
      } else if (this.state.currentSession === 'session') {
        this.setState({
          currentSession: 'break',
          timeInSeconds: this.state.breakLength * 60,
        })
      }
    }
  }

  reset() {
    clearInterval(this.state.intervalId); //clear intervalId, hence stop the countdown

    this.setState({
      //reset all to default
      breakLength: 5,
      sessionLength: 25,
      currentSession: 'session',
      timeInSeconds: 25 * 60,
      isStart: 0,
      intervalId: null,
    })
  };

  calculateMinutesAndSeconds() {

    //Math.floor is used to cut off the trailing decimal points    
    let minutes = Math.floor(this.state.timeInSeconds / 60); //convert seconds to minutes

    //for seconds, subtract the remaining seconds with the exact minute * 60 (which is also seconds)
    let seconds = this.state.timeInSeconds - (minutes * 60);

    //simple time formatting (mm:ss)
    if (minutes < 10) {
      minutes = '0' + minutes; //blessing that JS is dynamic type 🔥
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    return `${minutes}:${seconds}`; //heard this is the best way to concat string. It looks cool though
  }

  render() {
    return (
      <div className="app">
        <h1>Pomodoro Clock</h1>
        <div className="control-pnl">
          <SettingComponent
            name="Break Length"
            id="break-label"
            incrementId="break-increment"
            decrementId="break-decrement"
            lengthId="break-length"
            time={this.state.breakLength}
            increment={this.incrementBreak}
            decrement={this.decrementBreak}
          />
          <SettingComponent
            name="Session Length"
            id="session-label"
            incrementId="session-increment"
            decrementId="session-decrement"
            lengthId="session-length"
            time={this.state.sessionLength}
            increment={this.incrementSession}
            decrement={this.decrementSession}
          />
        </div>
        <div className="time">
          <Time
            time={this.calculateMinutesAndSeconds()}
            status={this.state.currentSession}
          />
        </div>
        <div className="bottom-pnl">
          <StartStopButton
            isStart={this.state.isStart}
            toggleStartStop={this.toggleStartStop}
          />
          <ResetButton
            reset={this.reset}
          />
        </div>
        <ReactFCCTest />
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
        <div id={this.props.id}>{this.props.name}</div>
        <div className="control">
          <div id={this.props.decrementId} className="btn" onClick={this.props.decrement}> - </div>
          <div id={this.props.lengthId}>{this.props.time}</div>
          <div id={this.props.incrementId} className="btn" onClick={this.props.increment}> + </div>
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
      <div className="display-pnl">
        <div id="timer-label" className="current-session">{this.props.status}</div>
        <div id="time-left">{this.props.time}</div>
      </div>
    )
  }
}

class StartStopButton extends React.Component {
  //Ahem, no need constructor here as we won't declare any local state here. (I read the docs 😎)

  render() {
    return (
      <div>
        <div id="start_stop" onClick={this.props.toggleStartStop} className="startStop-btn">{this.props.isStart ? 'Stop' : 'Start'}</div>
      </div>
    )
  }
}

class ResetButton extends React.Component {
  render() {
    return (
      <div>
        <div id="reset" onClick={this.props.reset} className="reset-btn">Reset</div>
      </div>
    )
  }
}

export default App;