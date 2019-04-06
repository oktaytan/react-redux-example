import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Posts from './components/Posts';
import Header from './components/Header';
import PostForm from './components/PostForm';

import store from "./redux/store";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
