import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25,
    }
    this.decrementBreak = this.decrementBreak.bind(this);
    this.incrementBreak = this.incrementBreak.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.incrementSession = this.incrementSession.bind(this);
  }

  decrementBreak() {
    if (this.state.break > 0) {
      this.setState({
        break: this.state.break - 1
      })
    }
  }

  incrementBreak() {
    if (this.state.break < 60) {
      this.setState({
        break: this.state.break + 1
      })
    }
  }

  decrementSession() {
    if (this.state.session > 0) {
      this.setState({
        session: this.state.session - 1
      })
    }
  }

  incrementSession() {
    if (this.state.session < 60) {
      this.setState({
        session: this.state.session + 1
      })
    }
  }

  render() {
    return(
      <div className="app">
      <h1>Pomodoro Clock</h1>
      <div className="control-pnl">
        <Break 
          time={this.state.break}
          increment={this.incrementBreak}
          decrement={this.decrementBreak}
        />
        <Session 
          time={this.state.session}
          increment={this.incrementSession}
          decrement={this.decrementSession}
        />
      </div>
      <div className="status">        
      </div>                 
    </div>
    )
  }
}

class Break extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time
    }
  }

  

  render() {
    return(
      <div>
        <div id="break-label">Break</div>
        <div className="control">
          <div id="break-decrement" className="btn" onClick={this.props.decrement}> - </div>
          <div id="break-length">{this.props.time}</div>
          <div id="break-increment" className="btn" onClick={this.props.increment}> + </div>
        </div>
      </div>
    )
  }
}

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time
    }
  }

  render() {
    return(
      <div>
        <div id="break-label">Break</div>
        <div className="control">
          <div id="break-decrement" className="btn" onClick={this.props.decrement}> - </div>
          <div id="break-length">{this.props.time}</div>
          <div id="break-increment" className="btn" onClick={this.props.increment}> + </div>
        </div>
      </div>
    )
  }
}



export default App;
