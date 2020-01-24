import React, { Component } from "react";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer } from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import "./App.css";

import SmurfsList from './SmurfList';
import Header from './Header';

const store = createStore(
  reducer, 
  applyMiddleware (thunk, logger)
)


class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <Header />
          <SmurfsList/>
        </div>
      </Provider>
    );
  }
}

export default App;
