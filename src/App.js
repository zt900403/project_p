import React, { Component } from 'react';
import './App.css';
import MyNavbar from './navbar';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <MyNavbar />
        </div>
        <p className="App-intro">
        </p>
        </div>
    );
  }
}

export default App;
