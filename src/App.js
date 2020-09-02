import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      currentSession: 'session',
      timeInSeconds: 25 * 60, //seems like using sessionLength * 60 doesn't work. Yeah, I still sucks at React 😣
      status: 'start', //either start or stop. passed to component startStop to indicate status
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
    this.reset = this.reset.bind(this);
    this.calculateMinutesAndSeconds = this.calculateMinutesAndSeconds.bind(this);
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
   * Credit to Lam Pham's cool pomodoro clock (https://github.com/completejavascript/pomodoro-clock) 
   * code for helping me solve this issue 
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

  //Handle counting down the time by decrementing the remaining seconds by 1.
  onCountdown() {
    this.setState({
      timeInSeconds: this.state.timeInSeconds - 1
    });
  }

  toggleStartStop() {
    if (this.state.status === 'start') { //eslint suggest me using '===' instead of '=='. Guess I'll follow
      this.setState({
        status: 'stop', //toggle (change 😉) from start to stop
      });
    } else {
      this.setState({
        status: 'start',
      })
    }
  }

  reset() {
    this.setState({
      //reset all to default
      breakLength: 5,
      sessionLength: 25,
      currentCountdown: 'session',
      timeInSeconds: 25 * 60,
      status: 'start',
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

    return `${minutes}: ${seconds}`; //heard this is the best way to concat string. It looks cool though
  }

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
          <Time time={this.calculateMinutesAndSeconds()} />
        </div>
        <div className="bottom-pnl">
          <StartStopButton
            status={this.state.status}
            toggleStartStop={this.toggleStartStop}
          />
          <ResetButton
            reset={this.reset}
          />
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
      <div className="display-pnl">
        <div>{this.props.time}</div>
      </div>
    )
  }
}

class StartStopButton extends React.Component {
  //Ahem, no need constructor here as we won't declare any local state here. (I read the docs 😎)

  render() {
    return (
      <div>
        <div onClick={this.props.toggleStartStop} className="startStop-btn">{this.props.status}</div>
      </div>
    )
  }
}

class ResetButton extends React.Component {
  render() {
    return (
      <div>
        <div onClick={this.props.reset} className="reset-btn">Reset</div>
      </div>
    )
  }
}

export default App;