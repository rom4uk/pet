import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {

  isComplited = () => {
    console.log(this.props.todo.id, this.props.todo.completed)
    return this.props.completed
  };

  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      color: this.props.todo.completed ? 'darkgrey' : '',
      padding: '10px',
      borderBottom: '1px dotted #ccc',
      display: 'flex',
      alignItems: 'center'
    }
  }

  btnStyle = () => {
    return {
      backgroundColor: this.props.todo.completed ? 'darkgrey' : '#ff0000',
      color: '#fff',
      padding: '5px 10px',
      borderRadius: '50%',
      border: 'none',
      cursor: this.props.todo.completed ? 'auto' : 'pointer'
    }
  }

  render() {
    const {title, id, completed} = this.props.todo;

      return (
        <div style={this.getStyle()}>
          <input 
            checked={completed}
            type="checkbox"
            onChange={this.props.markComplite.bind(this, id)}/> {' '}
          <span style={{
            flexGrow: '1',
            marginLeft: '5px'
          }}>{title}</span>
          <button
            disabled={completed ? 'disabled' : ''}
            style={this.btnStyle()}
            onClick={this.props.deleteTodo.bind(this, id)}>x</button>
        </div>
      );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplite: PropTypes.func.isRequired
}



export default TodoItem
