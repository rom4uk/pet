import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem deleteTodo={this.props.deleteTodo} markComplite={this.props.markComplite} key={todo.id} todo={todo} complited={todo.complited}/>
      
    ));
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;