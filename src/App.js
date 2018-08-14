import React, { Component } from 'react';
import { Provider } from 'react-redux';

import TodoList from './components/TodoList';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Todo List</h1>
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
