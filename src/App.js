import React from 'react';
import './App.css';


class Control extends React.Component {
  render() {
    return(
      <div>
        <div id={this.props.ID}>{this.props.name}</div>        
        <div className="control">
          <div className="btn" id={this.props.increment}>&#x025B4;</div>
          <div id={this.props.lengthID}>{this.props.value}</div>
          <div className="btn" id={this.props.decrement}>&#x025BE;</div>                
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <Control 
      name="Break Length" 
      ID="break-label" 
      increment="break-increment" 
      decrement="break-decrement" 
      lengthID="break-length" 
      value="5"/>
      <Control 
      name="Session Length" 
      ID="session-label" 
      increment="session-increment" 
      decrement="session-decrement" 
      lengthID="session-length" 
      value="25"/>
           
    </div>
  );
}

export default App;
