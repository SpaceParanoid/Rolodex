import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Emily'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.state.name} 
          </p>
          <button
          onClick={() =>  {
            this.setState({ name: 'Rose'});
          }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
