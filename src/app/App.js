import React from 'react';
import { BrowserRouter as HashRouter, Route, Link } from 'react-router-dom';

import icon_cpu from '../assets/flaticon/124091-design-tools/004-cpu.svg';
import icon_3d from '../assets/flaticon/124091-design-tools/012-color-circle.svg';
import './App.css';

function AboutPage(props) {
  return (
    <div>
      <img src={icon_3d} className="App-logo" alt="icon_3d" />
      <div className="App-cheer">
        <p>YourAngel45</p>
      </div>
    </div>
  );
}

function CreditsPage(props) {
  return (
    <div>
      Icons made by{' '}
      <a href="https://www.freepik.com/" title="Freepik">
        Freepik
      </a>{' '}
      from{' '}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>{' '}
      is licensed by{' '}
      <a
        href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0"
        target="_blank"
        rel="noopener noreferrer">
        CC 3.0 BY
      </a>
    </div>
  );
}

class IndexPage extends React.Component {
  cheers = [
    'People are illogical, unreasonable, and self-centered. Love them anyway.',
    'If you do good, people will accuse you of selfish ulterior motives. Do good anyway.',
    'If you are successful, you will win false friends and true enemies. Succeed anyway.',
    'The good you do today will be forgotten tomorrow. Do good anyway.',
    'Honesty and frankness make you vulnerable. Be honest and frank anyway.',
    'The biggest men and women with the biggest ideas can be shot down by the smallest men and women with the smallest minds. Think big anyway.',
    'People favor underdogs but follow only top dogs. Fight for a few underdogs anyway.',
    'What you spend years building may be destroyed overnight. Build anyway.',
    'People really need help but may attack you if you do help them. Help people anyway.',
  ];

  constructor(props) {
    super(props);
    this.state = { cheers: this.cheers, currentCheer: random(this.cheers.length) };
    this.setCurrentCheer = this.setCurrentCheer.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.setCurrentCheer, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  setCurrentCheer() {
    this.setState((state) => ({
      currentCheer: random(state.cheers.length),
    }));
  }

  render() {
    return (
      <div>
        <img src={icon_cpu} className="App-logo" alt="icon_cpu" />
        <div className="App-cheer">
          <p>{this.cheers[this.state.currentCheer]}</p>
        </div>
      </div>
    );
  }
}

function random(delta, offset = 0) {
  return Math.floor(Math.random() * delta) + offset;
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HashRouter basename='/'>
          <div className="App-main">
            <Route path="/" exact component={IndexPage} />
            <Route path="/about/" component={AboutPage} />
            <Route path="/credits/" component={CreditsPage} />
          </div>
          <footer className="App-footer">
            <nav>
              <ul>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/about/">ABOUT</Link>
                </li>
                <li>
                  <Link to="/credits/">CREDITS</Link>
                </li>
              </ul>
            </nav>
          </footer>
        </HashRouter>
      </div>
    );
  }
}

export default App;
