import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';

class App extends Component {
  constructor() {
    super();
    this.state = {
      circle1: '',
      circle2: '',
      circle3: '',
      circle4: '',
    };
  }

  handleClick1 = () => {
    this.setState({circle1: 'yes'})
  }

  handleClick2 = () => {
    this.setState({circle2: 'yes'})
  }

  handleClick3 = () => {
    this.setState({circle3: 'yes'})
  }

  handleClick4 = () => {
    this.setState({circle4: 'yes'})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
            handle={this.handleClick1}
            handle2={this.handleClick2}
            handle3={this.handleClick3}
            handle4={this.handleClick4}            
            selected={this.state.circle1}
            selected2={this.state.circle2}
            selected3={this.state.circle3}
            selected4={this.state.circle4}/>
          <Circles/>
        </main>
      </div>
    );
  }
}

export default App;
