import React, { Component } from 'react';
import uuid from 'uuid';
import axios from 'axios';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import About from './components/pages/About';
import MathTraining from './components/MathTraining/MathTraining';
import ChuckJokes from './components/ChuckJokes/ChuckJokes';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      todos: []
    }
  }

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(responce => this.setState({
        todos: responce.data
      }))
  }

  markComplite = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  deleteTodo = (id) => {
    console.log(id)
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      }))
    
  }

  addTodo = (title) => {

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false,
      id: uuid.v4()
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
    
  }

  render() {
    return(
      <Router>
        <div className='todos'>
          <div className="container">
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos deleteTodo={this.deleteTodo} markComplite={this.markComplite} todos={this.state.todos}/>
              </React.Fragment>
            )}/>
            <Route path='/about' component={About} />
            <Route path='/mathTraining' component={MathTraining} />
            <Route path='/chuckJokes' component={ChuckJokes} />
            
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
