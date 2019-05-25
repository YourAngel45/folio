import React from 'react';

import logo from './assets/flaticon/124091-design-tools/004-cpu.svg';
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
          <div className="App-cheer">
            <p>{this.state.cheer}</p>
          </div>
        </header>
        <footer className="App-footer">
          <div>
            Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
