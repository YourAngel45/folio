import React from 'react';

import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cheer: props.cheer }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.cheer}</p>
        </header>
      </div>
    );
  }
}

export default App;
