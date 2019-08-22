import React, { Component } from 'react'

export class AddTodo extends Component {

  state = {
    title: ''
  }

  onChange = (e) => this.setState({
    [e.target.name]: e.target.value
  })

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} action="#" method='GET' className='mainForm'>
          <input
            className='form-control'
            type="text"
            name="title"
            style={{flex: '10'}}
            placeholder='Add Todo...'
            value={this.state.title}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Submit"
            className='btnForm'
          />
        </form>
      </div>
    )
  }
}

export default AddTodo
