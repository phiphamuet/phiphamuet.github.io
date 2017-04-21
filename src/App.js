import React, { Component } from 'react';
import './dist/App.css';
import PageComponent from './components/PageComponent';
import icon from './icon.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageComponent/>
      </div>
    );
  }
}

export default App;
