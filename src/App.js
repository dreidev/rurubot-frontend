import React, {Component} from 'react';
import logo from './logo.svg';
// import './App.css';
//
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" width="100px" height="100px" alt="logo" />
          <h2>Rurubot</h2>
        </header>
        <main className="App-body">
          <h2>Rurubot</h2>
        </main>
        <footer className="App-footer">
          <p>Copyright (c) 2017 Dreidev All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;
