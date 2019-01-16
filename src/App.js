import React, { Component } from 'react';

import './style.scss';

import Color from './components/Color/';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          STYLES
        </header>
        <section className="App__content-wraper">
          <div className="App__content">
            <Color />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
