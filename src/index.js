import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';


function random(delta, offset=0) {
  return (Math.floor(Math.random() * delta) + offset);
}

const cheers = [
  'People are illogical, unreasonable, and self-centered. Love them anyway.',
  'If you do good, people will accuse you of selfish ulterior motives. Do good anyway.',
  'If you are successful, you will win false friends and true enemies. Succeed anyway.',
  'The good you do today will be forgotten tomorrow. Do good anyway.',
  'Honesty and frankness make you vulnerable. Be honest and frank anyway.',
  'The biggest men and women with the biggest ideas can be shot down by the smallest men and women with the smallest minds. Think big anyway.',
  'People favor underdogs but follow only top dogs. Fight for a few underdogs anyway.',
  'What you spend years building may be destroyed overnight. Build anyway.',
  'People really need help but may attack you if you do help them. Help people anyway.'
]

ReactDOM.render(<App cheer={cheers[random(cheers.length)]}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
