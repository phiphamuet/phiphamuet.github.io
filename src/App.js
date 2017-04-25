import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import feeds from './stores/Feeds';
import user from './stores/User';

import PageComponent from './components/PageComponent';
import icon from './icon.png';
import './dist/App.css';

const reducer = combineReducers({user, feeds});
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router className="App">
              <PageComponent/>
        </Router>
      </Provider>
    );
  }
}

export default App;
