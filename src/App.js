import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(),
      circle1: '',
      circle2: '',
      circle3: '',
      circle4: ''
    };
  }

  getInitialState() {
    return {
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector/>
          <Circles/>
        </main>
      </div>
    );
  }
}

export default App;
