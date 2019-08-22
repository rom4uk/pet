import React, { PureComponent, Component } from 'react';
import axios from 'axios';

const style = {
  marginRight: '10px'
}

class ChuckJokes extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      jokes: [],
      categories: [],
      isLoading: true,
      url: 'https://api.icndb.com',
      inputValue: 1
    }
  }



  componentDidMount() {
    axios.get(`${this.state.url}/jokes`)
      .then(res => this.setState({
        jokes: res.data.value,
        isLoading: false
      }))
  }

  renderList(count) {
    console.log('object', count)
  }

  renderJokes() {
    if(this.state.inputValue < 1) {
      return this.state.jokes.sort(() => 0.5 - Math.random()).filter((joke, i)=> i < 1).map((joke, i) => (
        <li className='list-group-item list-group-item-dark' key={i} dangerouslySetInnerHTML={{__html: joke.joke}}></li>
      ))
    }
    return this.state.jokes.sort(() => 0.5 - Math.random()).filter((joke, i)=> i < this.state.inputValue).map((joke, i) => (
      <li className='list-group-item list-group-item-dark' key={i} dangerouslySetInnerHTML={{__html: joke.joke}}></li>
    ))
  }

  handleChangeInput(e) {
    const val = e.target.value;
    console.log(e.target.value);
  }

  otherJokes() {
    console.log(this.myRef.current.value)
    if(this.myRef.current.value === '' || this.myRef.current.value === this.state.inputValue) {
      return false
    }
    this.setState({
      inputValue: this.myRef.current.value
    })
  }

  refresh() {
    this.myRef.current.value = '';
    this.setState({
      inputValue: 1
    })
  }
  getCategories(cat) {
    return this.state.jokes.sort(() => 0.5 - Math.random()).filter((joke, i)=> joke.categories.indexOf(cat) !== -1).filter((joke, i)=> i < this.state.inputValue).map((joke, i) => (
      <li className='list-group-item list-group-item-dark' key={i} dangerouslySetInnerHTML={{__html: joke.joke}}></li>
    ))

    
    console.log('object', this.state.categories)
  }

  render() {
    console.log(this.state.jokes)
    return (
      this.state.isLoading ? '' :
      <div className='chuckContainer'>
        <div style={{
          margin: '10px 0'
        }}>
          <input ref={this.myRef}
          onChange={this.handleChangeInput}
          placeholder='How many jokes do you want to see?'/>
        </div>
        <div style={{
          margin: '10px 0',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <button className='btn btn-info mr-2' onClick={this.otherJokes.bind(this)}>See Other Jokes</button>
          <button className='btn btn-info mr-2' onClick={this.refresh.bind(this)}>Refresh Jokes</button>
          <button className='btn btn-info mr-2' onClick={this.getCategories.bind(this, 'explicit')}>Explicit</button>
          <button className='btn btn-info mr-2' onClick={this.getCategories.bind(this, 'nerdy')}>Nerdy</button>
        </div>
        <ul>
        {this.renderJokes()}
        </ul>
      </div>
    )
  }
}

export default ChuckJokes
