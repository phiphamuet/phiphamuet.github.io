import React, { Component } from 'react';
import './dist/App.css';
import PageComponent from './components/PageComponent';
import icon from './icon.png';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <PageComponent/>
      </Router>
    );
  }
}

export default App;
