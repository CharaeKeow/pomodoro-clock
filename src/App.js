import React from 'react';
import './App.css';

class Break extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 5
    }
    //this.updateTime = this.updateTime.bind(this);
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  decrement() {
    if (this.state.time > 0) {
      this.setState({
        time: this.state.time - 1
      })
    }
  }

  increment() {
    if (this.state.time < 60) {
      this.setState({
        time: this.state.time + 1
      })
    }
  }

  render() {
    return(
      <div>
        <div id="break-label">Break</div>
        <div className="control">
          <div id="break-decrement" className="btn" onClick={this.decrement}> - </div>
          <div id="break-length">{this.state.time}</div>
          <div id="break-increment" className="btn" onClick={this.increment}> + </div>
        </div>
      </div>
    )
  }
}

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 25
    }
    //this.updateTime = this.updateTime.bind(this);
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  decrement() {
    if (this.state.time > 0) {
      this.setState({
        time: this.state.time - 1
      })
    }
  }

  increment() {
    if (this.state.time < 60) {
      this.setState({
        time: this.state.time + 1
      })
    }
  }

  render() {
    return(
      <div>
        <div id="break-label">Break</div>
        <div className="control">
          <div id="break-decrement" className="btn" onClick={this.decrement}> - </div>
          <div id="break-length">{this.state.time}</div>
          <div id="break-increment" className="btn" onClick={this.increment}> + </div>
        </div>
      </div>
    )
  }
}

function App() {
  return (
    <div className="app">
      <h1>Pomodoro Clock</h1>
      <div className="control-pnl">
        <Break/>
        <Session />
      </div>
      <div className="status">
        
      </div>                 
    </div>
  );
}

export default App;
