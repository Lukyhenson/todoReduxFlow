import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from '../actions/todos';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoText: ''
    }
    console.log(props);

    this.addNewTodo = this.addNewTodo.bind(this);
  }

  state = {
    newTodoText: ''
  };

  addNewTodo = () => {
    this.props.addTodo(this.state.newTodoText);

    this.setState({ newTodoText: '' });
  };

  removeTodo = (id) => {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <div key={todo.id}>
              <li >{todo.text}</li><button onClick={e => { e.preventDefault(); this.removeTodo(todo.id)}}>x</button>
            </div>
          ))}
        </ul>

        <input
          type="text"
          value={this.state.newTodoText}
          onChange={e => this.setState({newTodoText: e.target.value})}
        />
        <button onClick={this.addNewTodo}>
          Submit
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => 
  bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);